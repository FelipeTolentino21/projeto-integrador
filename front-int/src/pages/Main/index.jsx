import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

export default function Main() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single()
        .then(({ data }) => {
          setUserData(data);
        });
    });
  }, []);

  return (
    <div>
      <h1>Bem-vindo(a)!</h1>
      {userData ? (
        <p>Você está logado como: {userData.email}</p>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
}
