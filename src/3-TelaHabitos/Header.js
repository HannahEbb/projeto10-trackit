import styled from 'styled-components';
import { useState } from "react";



//ao salvar as informações, vamos fazer um post do novo hábito

export default function Header() {
    const [texto, setTexto] = useState("");

    //addHabito controla se o formulário do novo hábito fica ou não visível!
    // Variar status dp card de hábito como o Lelê fez: https://us06web.zoom.us/rec/play/NZ9nX2YTREa6A_wxMww-cecE-r0T21Z_tXTidJd6iUvTcPNunmaWTSM0EGhRGhaC1aZFGDYVRzn4O_TN.pjb3fbyOIsTdvug0?startTime=1652737202000&_x_zm_rtaid=U6UrpTYDTbC4TKhcQIE8JA.1653598980720.df8d93c9b5b896002bd0f32df586b172&_x_zm_rhtaid=688


    return (
    <>
    <Container>
        <MeusHabitos>
        <h2>Meus Hábitos</h2>
        <div /*onClick={addHabito}*/>+</div>
        </MeusHabitos>
       
               <NovoHabito>
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
                        <h2>Cancelar</h2>
                        <div>Salvar</div>
                    </Botoes>
              </NovoHabito>
    </Container>
    </>
    );
    }

const Container = styled.div`
background-color: var(--cor-cinza-claro)
`

const MeusHabitos = styled.div`
    width: 100%;
    height: 70px;
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

const NovoHabito = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: var(--cor-fundo-footer);
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