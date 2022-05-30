import React from 'react';
import styled from 'styled-components';


export default function Data () {

    const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    const d = new Date();
    let diaSemana = weekday[d.getDay()];
    let day = d.getUTCDate();
    let month = d.getMonth();


    return (
        <Container>
        <p>{diaSemana}, {day}/{month}</p>
        <h2>Conclusão hábitos</h2>
        </Container>

    );
}

const Container = styled.div `
    
    width: 100%
    height: 100px;
    background-color: var(--cor-cinza-claro);
    padding-top: 28px;
    padding-left: 17px;
    
    p {
        font-size: 23px;
        color: var(--cor-azul-escuro);
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        color: #BABABA;
    }

`;