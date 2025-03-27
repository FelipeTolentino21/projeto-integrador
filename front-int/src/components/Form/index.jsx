import { useState } from "react";
import { supabase } from "../../services/supabase";
import logoceub from "../../assets/logo-ceub.webp";
import "./form.css";

export default function Form() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleSignUp() {
        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }
        
        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha  // Isso vai funcionar, pois 'password' é o nome que o Supabase espera
        });

        if (error) {
            alert("Erro ao cadastrar: " + error.message);
            return;
        }

        // Verifica se o usuário foi criado corretamente
        if (!data.user) {
            alert("Erro ao obter dados do usuário.");
            return;
        }

        // Salva no banco de dados sem a senha
        const { error: dbError } = await supabase
            .from("users")
            .insert([{ id: data.user.id, email }]); // Removendo a senha

        if (dbError) {
            alert("Erro ao salvar no banco: " + dbError.message);
        } else {
            alert("Cadastro realizado com sucesso!");
        }
    }

    return (
        <div className="Form">
            <div className="ceub-image">
                <img src={logoceub} alt="ceub-logo" />
            </div>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="RA, Email ou CPF"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className="botao-form" onClick={handleSignUp}>Acessar</button>
            </div>
        </div>
    );
}
