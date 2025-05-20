import styled from "styled-components";
import {Link} from "react-router-dom";
import "@fontsource/inter";

export const Header = styled.div`
    background-color: #42154E;
    color: white;
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;

    img {
        width: 100px;
        height: auto;
        background-color: white;
        border-radius: 10%;
        padding: 0.5rem;
    }

    h1 {
        margin: 0;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`;

export const Container = styled.div`
    text-align: center;
    background-color: #42154E;
    height: 100vh;
    font-family: "Inter", sans-serif;
`;

export const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    height: 70vh;
    overflow-y: auto;
    padding: 1rem;
    align-items: center;
    background-color:rgb(241, 237, 237);
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 0 auto;
    height: 15rem;
    max-width: 200px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;

    p {
        margin: 0.5rem 0 0;
        font-size: 0.9rem;
        color: gray;
    }
`;

export const CardTitle = styled.h2`
    fonts-size: 1.2rem;
    margin: 0 0 0.5rem;
    color: #42154E;
`;

export const CardDescription = styled.p`
    font-size: 0.9rem;
    color: black;
    margin: 0 0 0.5rem;
`;

export const AddButton = styled.button`
    background-color: #42154E;
    color: white;
    font-size: 5rem;
    border: none;
    border-radius: 50%;
    width 10rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: auto; 

    &:hover {
        background-color: #43054E;
    }
`;

// import "@fontsource/inter";

// export const theme = {
//     colors: {
//         roxoCeub: "#42154E",
//         roxoCeubEscuro: "#43054E",

//     },

//     fonts: {
//         inter: "'Inter', sans-serif",
//     },
// };