import { useState } from "react";
import { supabase } from "../../services/supabase";
import { Link } from "react-router-dom";

import "../Login/login.css"
import ceub from "../../assets/logo-ceub.webp"
import ceubHeader from "../../assets/logo-ceub-header.webp"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    async function handleSignup(e) {
        e.preventDefault();
        setMessage('Cadastrando...');

        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
        });

        if (error) {
            setMessage('Erro ' + error.message);
            return;
        }

        const userId = data.user.id;
        const { error: insertError } = await supabase
            .from('usuarios')
            .insert([{ id: userId, nome, senha, email }]);

        if (insertError) {
            setMessage('Error ao salvar os dados: ' + insertError.message);
            return;
        }
        setMessage('Usuário cadastrado com sucesso!');
    }

    return (
        <div className="page-border">
            <div className="top-image-container">
                <img src={ceubHeader} alt="Logo CEUB" className="top-image" />
            </div>

            <div className="login-container">
                <form onSubmit={handleSignup} className="login-form">
                    <h2>Cadastro</h2>

                    <input
                        type="text"
                        value={nome}
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        value={senha}
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit" className="button">Cadastrar</button>
                    <Link className="link" to={"/login"}>Já possui uma conta? Entre aqui.</Link>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}