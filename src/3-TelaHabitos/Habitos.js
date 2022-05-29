import { useContext } from "react";
import UserContext from "../UserContext";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Card from "./Card";


export default function Habitos () {
    const { token } = useContext(UserContext);

    const [habitos, setHabitos] = useState([]);

    
    useEffect(() => {
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const promise = axios.get(URL, config);
    promise.then((response) => {
        const dados = response.data;
        if(dados.length !==0) {
            setHabitos([...dados]); 
        }
    })

}, [token]);


function listarHabitos () {
    if(habitos.length > 0) {
        return habitos.map(habito => { return <Card key={habito.id} habitoId={habito.id} name={habito.name} days={habito.days}/>});
    } else {
        return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>;
    }
}

const exibirhabitos = listarHabitos();

    return (
        <ListarHabitos>
          { exibirhabitos }
        </ListarHabitos>
        );
        } 



const ListarHabitos = styled.div`
    width: 100%;
    height: 100%px;
    padding-top: 2px;
    padding-left: 20px;
    padding-right: 18px;

    p {
        padding-top: 28px;
        color: var(--cor-cinza-escuro);
        font-weight: 400;
        font-size: 18px;
        font-style: normal;
        line-height: 22px;
        font-weight: 400;
    }

`;

