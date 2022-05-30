import React from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';


export default function Historico() {
    const { token } = useContext(UserContext);

    const [historico, setHistorico] = useState([]);

    
    useEffect(() => {
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const promise = axios.get(URL, config);
    promise.then((response) => {
        const dados = response.data;
        console.log(response);
        if(dados.length !==0) {
            setHistorico([...dados]); 
        }
    })

}, [token]);

    return(
        <>
        <p>Historico</p>
        </>
    );
}