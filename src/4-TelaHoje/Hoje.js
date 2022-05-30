import React from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

export default function Hoje() {

    const { token } = useContext(UserContext);

    const [habitosHoje, setHabitosHoje] = useState([]);

    
    useEffect(() => {
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

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
            setHabitosHoje([...dados]); 
        }
    })

}, [token]);

    return (
        <Container>
        <p>Hoje</p>
        </Container>
    );
}

const Container = styled.div`

    overflow-y: true;

`