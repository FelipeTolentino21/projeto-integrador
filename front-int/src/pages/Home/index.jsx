import React, {useState} from "react";
import {Container, Header, Board, Card, CardDescription, CardTitle, AddButton} from "./styles";
import logo from "../../assets/logo-ceub.webp";

export default function Home() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="" />
            </Header>
            <Board>
                <Card>
                    <CardTitle>Minicurso Java</CardTitle>
                    <CardDescription>Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. 
                        Iusto, repellat rem. Laboriosam esse id 
                        aliquam sunt, corporis temporibus, 
                        a dolore necessitatibus ex dolor 
                        laborum velit iusto possimus veniam 
                        dignissimos quisquam?</CardDescription>
                </Card>
                <AddButton>+</AddButton>
            </Board>
        </Container>
    );
}