import React from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../UserContext";


export default function Data () {

    const { realizados, habitosHoje } = useContext(UserContext);
    const porcentagemHoje = (realizados.length/habitosHoje.length)*100

    const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    const d = new Date();
    let diaSemana = weekday[d.getDay()];
    let day = d.getUTCDate();
    let month = d.getMonth() +1;


    return (
        <Container>
        <p>{diaSemana}, {day}/{month}</p>
        <h2>{porcentagemHoje > 0 ? `${parseInt(porcentagemHoje)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h2>
        </Container>

    );
}

const Container = styled.div `
    
    width: 100%
    height: 100px;
    background-color: var(--cor-cinza-claro);
    padding-top: 100px;
    padding-left: 17px;
    
    p {
        font-size: 23px;
        color: var(--cor-azul-escuro);
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        padding-top: 5px;
        color: #BABABA;
    }

`;