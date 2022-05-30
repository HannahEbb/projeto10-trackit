import React from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import HabitoDoDia from './HabitoDoDia';


export default function Hoje() {

    const { token, realizados, habitosHoje, setHabitosHoje } = useContext(UserContext);

    
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
            if(dados.length !==0) {
                setHabitosHoje([...dados]); 
            }
        })

    }, [realizados]);


function listarHabitosHoje () {
    if(habitosHoje.length > 0) {
        return habitosHoje.map(habito => { return <HabitoDoDia key={habito.id} 
                                                                habitoHojeId={habito.id} 
                                                                nameHoje={habito.name} 
                                                                done={habito.done} 
                                                                currentSequence={habito.currentSequence}
                                                                highestSequence={habito.highestSequence}/>});
    } else {
        return <p>Você não tem nenhum hábito no dia de hoje :/</p>;
    }
}

const exibirHabitosHoje = listarHabitosHoje();


    return (
        <Container>
            {exibirHabitosHoje}
        </Container>
    );
}

const Container = styled.div`

    overflow-y: true;
    padding-top: 18px;
    padding-left: 18px;

`