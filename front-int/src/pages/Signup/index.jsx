import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import logoceub from "../../assets/logo-ceub.webp";
import "./form.css";

export default function signUp() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleSignUp() {
        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }
        
        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
        });

        if (error) {
            alert("Erro ao cadastrar: " + error.message);
            return;
        }

        if (!data.user) {
            alert("Erro ao obter dados do usuário.");
            return;
        }

        await supabase.from("users").insert([
            {
                id: data.user.id,
                email,
            },
        ]);

        alert("Cadastro realizado!");
        navigate("/login");
        
        /*const { error: dbError } = await supabase
            .from("users")
            .insert([{ id: data.user.id, email }]);

        if (dbError) {
            alert("Erro ao salvar no banco: " + dbError.message);
        } else {
            alert("Cadastro realizado com sucesso!");
        */
    }

    return (
        <div className="form">
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