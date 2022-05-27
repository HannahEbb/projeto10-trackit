import { useContext } from "react";
import UserContext from "../UserContext";
import { useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
//import Card from './Card';


export default function Habitos () {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { token } = useContext(UserContext);
    
    useEffect(() => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const promise = axios.get(URL, config);
    promise.then((response) => {
        const { data } = response;
        console.log(data);

    })

}, [token]);


    return (
        <Meushabitos>
            <h2>Meus Hábitos</h2>
            <div >+</div>
          
        </Meushabitos>
    );
}

// SEGUE O CÓDIGO DO FRANK PARA OS GETs: https://us06web.zoom.us/rec/play/Rxro-uF8Eg2yd9ndVtOY2xTPTP4SCPEfofLlBcJVKu5X_JvmKQFlAAb6qyRxudzJ97oEGM-gYxh3yORB.0LbKumHKsf5bC5HX?startTime=1653342159000&_x_zm_rtaid=zzwhJxmYRHu6dzK2lTSexg.1653606278549.a744a1925283f45c245502cae142210d&_x_zm_rhtaid=304 
// tem que fazer o GET para pegar as tarefas da pessoa -> Passa o TOKEN pelo Context API
// se o array de tarefas for vazio, exibir a msg "Você não tem nenhum hábito..."

// Código que adicione e remove componentes: https://codesandbox.io/s/014-todo-list-strikes-back-forked-06irij?file=/src/components/Todo.js 

// Variar status dp card de hábito como o Lelê fez: https://us06web.zoom.us/rec/play/NZ9nX2YTREa6A_wxMww-cecE-r0T21Z_tXTidJd6iUvTcPNunmaWTSM0EGhRGhaC1aZFGDYVRzn4O_TN.pjb3fbyOIsTdvug0?startTime=1652737202000&_x_zm_rtaid=U6UrpTYDTbC4TKhcQIE8JA.1653598980720.df8d93c9b5b896002bd0f32df586b172&_x_zm_rhtaid=688




const Meushabitos = styled.div`
    width: 100%;
    height: 100px;
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