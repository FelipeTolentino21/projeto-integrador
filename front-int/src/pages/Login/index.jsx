import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });

        if (error) {
            alert("Erro ao logar: " + error.message);
        } else {
            localStorage.setItem("token", data.session.access_token);
            navigate("/");
        }
    }



    return (
        <form onSubmit={handleLogin}>
            <label>Email: </label>
            <input type="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Senha: </label>
            <input type="password" className="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

            <button onClick={handleLogin}>Entrar</button>
        </form>
    )
}