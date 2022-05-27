import { useContext } from "react";
import UserContext from "../UserContext";
import { useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useState } from "react";
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
        <>
        <Header>
            <h2>Meus Hábitos</h2>
            <div >+</div>
        </Header>
        <MeusHabitos>
            { !habitos ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            :  habitos.map(habito => { <Card key={habito.id} name={habito.name} days={habito.days}/>})
            }
        </MeusHabitos>
        </>
    );
}


// Código que adicione e remove componentes: https://codesandbox.io/s/014-todo-list-strikes-back-forked-06irij?file=/src/components/Todo.js 

// Variar status dp card de hábito como o Lelê fez: https://us06web.zoom.us/rec/play/NZ9nX2YTREa6A_wxMww-cecE-r0T21Z_tXTidJd6iUvTcPNunmaWTSM0EGhRGhaC1aZFGDYVRzn4O_TN.pjb3fbyOIsTdvug0?startTime=1652737202000&_x_zm_rtaid=U6UrpTYDTbC4TKhcQIE8JA.1653598980720.df8d93c9b5b896002bd0f32df586b172&_x_zm_rhtaid=688


const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: var(--cor-cinza-claro);
    display: flex;
    justify-content: space-between;
    padding-top: 28px;
    padding-left: 17px;
    padding-right: 18px;

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

const MeusHabitos = styled.div`
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