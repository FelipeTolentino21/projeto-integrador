import { useState } from "react";
import { useNavigate } from "react-router-dom"
import pngaccount from "../../assets/account.png";
import { supabase } from "../../services/supabase";
import ceubHeader from "../../assets/logo-ceub-header.webp"
import "./header.css"


export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  
  async function handleLogout() {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <header className="header">
      <img src={ceubHeader} alt="imagem cima ceub" className="top-image" />

      <button onClick={() => setOpenPopup(!openPopup)} className="popup">
        <img src={pngaccount} alt="icone do usuário" height={60} />
      </button>

      {openPopup && (
        <div className="modal">
          <p>Minha Conta</p>
          <p>Configurações</p>
          <p>Ajuda</p>
          <button onClick={handleLogout} className="button">Sair</button>
        </div>
      )}
    </header>
  );
}