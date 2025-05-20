import React, {useState} from "react";
import {Container, Header, Board, Card, CardDescription, CardTitle, AddButton} from "./styles";
import logo from "../../assets/logo-ceub.webp";

export default function Home() {
    const [cards, setCards] = useState([
        {
            title: "Adicione novos cursos",
            description: "",
            schedule: "",
        },
    ]);

    const addCard = () => {
        const newCard = {
            title: "Novo Curso",
            description: "Descrição",
            schedule: "Horário",
        };
        setCards([...cards, newCard]);

        setCards((prevCards) => {
            const updatedCards = [...prevCards, newCard];
            return updatedCards.length > 1 ? updatedCards.slice(1) : updatedCards;
        });
    };

    return (
        <Container>
            <Header>
                <img src={logo} alt="" />
            </Header>
            <Board>
                {cards.map((card, index) => (
                    <Card key = {index}>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                        <p>{card.schedule}</p>
                    </Card>
                ))}
                <AddButton onClick={addCard}>+</AddButton>
            </Board>
        </Container>
    );
}