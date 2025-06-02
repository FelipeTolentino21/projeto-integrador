import { useNavigate } from "react-router-dom"
import { supabase } from "../../services/supabase";
import ceub from "../../assets/logo-ceub.webp"

import "./header.css"

export default function Header() {
    const navigate = useNavigate();

    async function handleLogout() {
        await supabase.auth.signOut();
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div>
            <img src={ceub} alt="ceub-image" />
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}