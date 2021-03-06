import React, { useState } from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";
import styled from 'styled-components';
import Dia from './Dia';
import axios from 'axios';


export default function NovoHabito() {
    const { setClicado, token, deletados, setDeletados } = useContext(UserContext);

    const [diasSelecionados, setDias] = useState([]);
    const [dadosHabito, setDadosHabito] = useState({})
   
    const dias = [{inicial: "D", id: 1}, 
                {inicial: "S", id: 2}, 
                {inicial: "T", id: 3}, 
                {inicial: "Q", id: 4}, 
                {inicial: "Q", id: 5},
                {inicial: "S", id: 6}, 
                {inicial: "S", id: 7}];

    function toggle (id) {
        const jaSelecionado = diasSelecionados.some(d => d === id);

        if(diasSelecionados.length===0) {
            setDias([...diasSelecionados, id]);
        }
        if(!jaSelecionado) {
            setDias([...diasSelecionados, id]);
        }  else {
                const novosDias = diasSelecionados.filter(d => d !== id);
                setDias(novosDias);
            }
            console.log(diasSelecionados);
    } 

    function salvarHabito() {
        if(diasSelecionados.length > 0) {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const promise = axios.post(URL, {
                name: dadosHabito.name,
                days: diasSelecionados.map(dia => dia)
            }, config);

            promise.then( response => {
                setDeletados([...deletados, token]);
                console.log(response);
                setClicado(false);
            })
        }

    }

    return (
        <Container>
            <input type="text" value={dadosHabito.name} onChange={e => setDadosHabito({...dadosHabito, name: e.target.value})} placeholder="  nome do h??bito"></input>
                <Semana>
                    {dias.map(day => {
                        const {id , inicial} = day;
                        const selecionado = diasSelecionados.some(d => d === id);
                        return (<Dia 
                            key={id} 
                            inicial={inicial} 
                            id={id} 
                            aoSelecionar={(id) => toggle(id)} selecionado={selecionado}/>)
                    })}
                </Semana>
                        <Botoes>
                            <h2 onClick={() => setClicado(false)}>Cancelar</h2>
                            <div onClick={salvarHabito}>Salvar</div>
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

    h2 {
        font-size: 16px;
        color: var(--cor-azul-claro);

    }
    
`;