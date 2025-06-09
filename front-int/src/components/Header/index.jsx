import { useState } from "react";
import { useNavigate } from "react-router-dom"
import pngaccount from "../../assets/account.png";
import { supabase } from "../../services/supabase";
import ceub from "../../assets/logo-ceub.webp"
import "./header.css"


export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();
    
    async function handleLogout() {
        await supabase.auth.signOut();
        localStorage.removeItem("token");
        navigate("/login");
    }
    
    return(
        <div className="header">
            <img src={ceub} alt="ceub-image" height={80}/>
            <button onClick={() => setOpenPopup(!openPopup)} className="popup"><img src={pngaccount} alt="icone do usuário" height={70}/></button>
        
        {openPopup && (
            <div className="modal">
                <p>Minha Conta</p>
                <p>Configurações</p>
                <p>Ajuda</p>
                <button onClick={handleLogout}>Sair</button>
            </div>
        )}
        
        </div>
    )
}