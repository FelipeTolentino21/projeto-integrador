import { useState } from "react";
import { supabase } from "../../services/supabase";

import "./form.css"

export default function Signup(){
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [message, setMessage] = useState('')

    async function handleSignup(e) {
        e.preventDefault()
        setMessage('Cadastrando...')

        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
        })

        if (error) {
            setMessage('Erro ' + error.message)
            return
        }

        const userId = data.user.id
        const { error: insertError } = await supabase
            .from('usuarios')
            .insert([{ id: userId, nome, senha, email }])
        
        if (insertError) {
            setMessage('Error ao salvar os dados: ' + insertError.message)
            return
        }
        setMessage('Usuário cadastrado com sucesso!')
    }
    return(
        <form onSubmit={handleSignup} className="form">
            <h2>Cadastro</h2>
            <label>Nome: </label>
            <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            />

            <label>Email: </label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <label>Senha: </label>
            <input 
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
            <button type="submit">Cadastrar</button>
            <p>{message}</p>
        </form>
    )
}