import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate, Link } from "react-router-dom";


import "./login.css"
import ceub from "../../assets/logo-ceub.webp"

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
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
            <img src={ceub} alt="imagem ceub" />
            <div>
                <input
                    type="email"
                    className="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <input
                type="password"
                className="senha"
                value={senha}
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
                required
            />

            <button type="submit" className="button">Acessar</button>
            <Link className="link" to={"/signup"}>Criar conta</Link>

            <p>{message}</p>
        </form>
    )
}