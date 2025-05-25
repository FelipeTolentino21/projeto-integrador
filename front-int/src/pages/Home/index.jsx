import { useNavigate } from "react-router-dom"
import { supabase } from "../../services/supabase";

export default function Home() {
    const navigate = useNavigate();

    async function handleLogout() {
        await supabase.auth.signOut();
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div>
            oi, home
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}