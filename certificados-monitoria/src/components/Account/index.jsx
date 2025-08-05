import pngaccount from "../../assets/account.png";

export function Account(){
    return(
        <div className="myaccount">
            <img src={pngaccount} alt="minha imagem" />
            <h1>Minha Conta</h1>
        </div>
    )
}