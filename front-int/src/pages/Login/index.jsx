import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] =useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setMessage('Entrando...')

        const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        })
        if (error) {
            setMessage('Erro: ' + error.message)
            return
        }

        setMessage('Login realizado com sucesso!')
        setTimeout(() => {
            navigate('/')
        }, 1500)
    }
    return (
        <form onSubmit={handleLogin}>
            <label>Email: </label>
            <input 
            type="email" 
            className="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <label>Senha: </label>
            <input 
            type="password" 
            className="senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required
            />

            <button type="submit">Entrar</button>

            <p>{message}</p>
        </form>
    )
}