import React, { useState } from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";
import styled from 'styled-components';



export default function NovoHabito() {
    const { setClicado } = useContext(UserContext);

    const [texto, setTexto] = useState("");

    return (
        <Container>
            <input type="text" value={texto} onChange={e => setTexto(e.target.value)} placeholder="  nome do hábito"></input>
                <Semana>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                </Semana>
                        <Botoes>
                            <h2 onClick={() => setClicado(false)}>Cancelar</h2>
                            <div>Salvar</div>
                        </Botoes>
        </Container>  
    );
}

const Container = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: var(--cor-fundo-footer);
    margin-top: 10px;
    margin-left: 17px;
    margin-right: 18px;
    padding-top: 18px;
    padding-left: 19px;
    padding-right: 18px;
    padding-bottom: 23px;

    input {
        width: 303px;
        height: 45px;
        font-size: 20px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder {
            color: var(--cor-cinza-claro);
        }
    }

`;

const Semana = styled.div`

display: flex;

div {
    width: 30px;
    height: 30px;
    margin-right:4px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    padding-top: 4px;
    color: var(--cor-cinza-claro);
    }
    
`;

const Botoes = styled.div`

display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 25px;

div {
    width: 84px;
    height: 35px;
    border-radius: 5px;
    background-color: var(--cor-azul-claro);
    font-size: 16px;
    text-align: center;
    padding-top: 8px;
    margin-left: 23px;
    color: var(--cor-fundo-footer);
    }
    
`;