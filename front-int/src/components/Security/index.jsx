import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

export default function Security({ children }) {
    const [isLogged, setIsLogged] = useState(null);

    useEffect(() => { 
        supabase.auth.getSession().then(({ data: { session } } ) => {
            setIsLogged(!session);
        });
    }, []);

    if (isLogged === null) return <p>Verificado sessão...</p>;

    return isLogged ? children : <Navigate to="/login"/>;
}