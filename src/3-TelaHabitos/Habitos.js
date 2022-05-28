import { useContext } from "react";
import UserContext from "../UserContext";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Card from "./Card";


export default function Habitos () {
    const { token } = useContext(UserContext);

    const [habitos, setHabitos] = useState(null);

    
    useEffect(() => {
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const promise = axios.get(URL, config);
    promise.then((response) => {
        const { data } = response;
        if(data.length !==0) {
            setHabitos(data);  
        }
    })

}, [token]);

    return (
        <ListarHabitos>
          { !habitos ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    :  habitos.map(habito => { <Card key={habito.id} name={habito.name} days={habito.days}/>})
            }
        </ListarHabitos>
        );
        } 



// Código que adicione e remove componentes: https://codesandbox.io/s/014-todo-list-strikes-back-forked-06irij?file=/src/components/Todo.js 



const ListarHabitos = styled.div`
    width: 100%;
    height: 896px;
    background-color: var(--cor-cinza-claro);
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

