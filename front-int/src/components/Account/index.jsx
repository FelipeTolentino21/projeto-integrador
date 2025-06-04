import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";


export function Account(){
    const navigate = useNavigate();

    async function handleLogout() {
        await supabase.auth.signOut();
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}