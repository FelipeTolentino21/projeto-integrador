import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

export default function Cursos() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const { error, data } = await supabase.auth.getUser();
            if (data?.user) {
                setUserId(data.user.id)
            } else {
                setMessage("Você precisa estar logado para criar cursos.")
            }  
        }
        fetchUser();
    }, []);
    
    async function handleCursos(e) {
        e.preventDefault()

        if (!userId) {
            setMessage("Usuário não autenticado. ")
            return
        }
        const { error: insertError} = await supabase
        .from('cursos')
        .insert([
            {  
                nome, 
                descricao,
                user_id: userId,
            }
        ])
            
        if (insertError) {
            setMessage('Error ao salvar os dados: ' + insertError.message)
            return
        }
        setMessage("Curso criado com sucesso!");
        setNome("");
        setDescricao("");
  }

    
    return(
        <form onSubmit={handleCursos}>
            <h2>Nome: </h2>
            <input 
            type="text" 
            onChange={(e) => setNome(e.target.value)}
            required/>
            <h2>Descrição: </h2>
            <input 
            type="text" 
            onChange={(e) => setDescricao(e.target.value)}
            required/>
        </form>
    )
}