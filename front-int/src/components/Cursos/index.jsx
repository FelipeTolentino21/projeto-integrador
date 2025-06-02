import { useState } from "react";
import { supabase } from "../../services/supabase";

export default function Cursos() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] =useState("");

    async function handleCursos(e) {
        e.preventDefault()
        
        const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        })

        if (error) {
            setMessage("Erro: " + error.message)
            return
        }


    }
    
    return(
        <div>

        </div>
    )
}