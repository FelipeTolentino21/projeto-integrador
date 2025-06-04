import { useNavigate } from "react-router-dom"
import { supabase } from "../../services/supabase";
import ceub from "../../assets/logo-ceub.webp"
import { Account } from "../Account";

import "./header.css"

export default function Header() {
    
    return(
        <div>
            <img src={ceub} alt="ceub-image" />
            <Account />
        </div>
    )
}