import styled from 'styled-components';
import { useState } from "react";



export default function Card() {
    const [habito, setHabito] = useState("");

    return(
        <Container>
            <input type="text" value={habito} onChange={e => setHabito(e.target.value)} placeholder="nome do hábito"></input>
            <Semana>
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </Semana>

        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    height: 180px;
    background-color: var(--cor-fundo-footer);
    margin-left: 17px;
    margin-right: 18px;
    padding-top: 100px;
    padding-left: 19px;
    padding-right: 18px;
    padding-bottom: 23px;


    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder {
            color: var(--cor-cinza-claro);
        }
    }

    div {
        width: 40px;
        height: 35px;
       
    }
`;

const Semana = styled.div`
    width: 340px;
    height: 180px;
    background-color: var(--cor-fundo-footer);
    margin-left: 17px;
    margin-right: 18px;
    padding-left: 19px;
    padding-right: 18px;
    padding-bottom: 23px;

    div {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        color: var(--cor-conza-claro);
    }
`;