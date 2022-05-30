import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../UserContext";
import NovoHabito from './NovoHabito';



export default function Header() {
    
    const { clicado, setClicado } = useContext(UserContext);

    return (
    <Container>
        <MeusHabitos>
        <h2>Meus Hábitos</h2>
        <div onClick={() => setClicado(true)}>+</div>
        </MeusHabitos>
        {clicado ? <NovoHabito /> : null}
    </Container>
    );
    }

const Container = styled.div`
    background-color: var(--cor-cinza-claro);
`
const MeusHabitos = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 17px;
    padding-right: 18px;
    background-color: var(--cor-cinza-claro);

    h2 {
        color: var(--cor-azul-escuro);
        font-size: 23px;
        font-weight: 400;
    }

    div {
        width: 40px;
        height: 35px;
        background-color: var(--cor-azul-claro);
        font-size: 27px;
        font-weight: 400;
        color: var(--cor-fundo-footer);
        text-align: center;
        border-radius: 4.63636px;
    }
`;

