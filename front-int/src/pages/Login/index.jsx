import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

import logoceub from "../../assets/logo-ceub.webp";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });

        if (error) {
            alert("Erro ao fazer login: " + error.message);
        } else {
            navigate("/home");
        }
    }
    return (
        <div>
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
                            <button className="botao-form" onClick={handleLogin}>Acessar</button>
            </div>
        </div>
    )
}