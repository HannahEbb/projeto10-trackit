import { useContext } from "react";
import UserContext from "../UserContext";
import { confirmAlert } from 'react-confirm-alert'; 
import axios from 'axios';
import styled from 'styled-components';
import lixo from "../assets/bin.png";


export default function Card({ habitoId, name, days }) {
    const { token } = useContext(UserContext);
    
    const id = [1, 2, 3, 4, 5, 6, 7]


    //function deletarHabito () {

        // confirmAlert({
        //     customUI: ({ onClose }) => {
        //       return (
        //         <div>
        //           <h1>Tem certeza</h1>
        //           <p>que quer deletar este hábito?</p>
        //           <button onClick={onClose}>Não</button>
        //           <button
        //             onClick={() => {
        //               this.deletarHabitoSim();
        //               onClose();
        //             }}
        //           >
        //             Sim, pode deletar!
        //           </button>
        //         </div>
        //       );
        //     }
        //   });

        // }

        function deletarHabitoSim () {
        
          const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoId}`;
    
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
  
          axios.delete(URL, config)  
          .then(res => {  
            console.log(res);  
            console.log(res.data)}); 
            //recarregar componente Habitos!

    }


    return(
        <Container>
            <Name>
            <h2>{name}</h2>
            <img onClick={deletarHabitoSim} src={lixo} width="13px" height="15px"/>
            </Name>
            <Semana>
                <Day  selecionado={days.some(d => d === id[0])}>D</Day>
                <Day  selecionado={days.some(d => d === id[1])}>S</Day>
                <Day  selecionado={days.some(d => d === id[2])}>T</Day>
                <Day  selecionado={days.some(d => d === id[3])}>Q</Day>
                <Day  selecionado={days.some(d => d === id[4])}>Q</Day>
                <Day  selecionado={days.some(d => d === id[5])}>S</Day>
                <Day  selecionado={days.some(d => d === id[6])}>S</Day>
            </Semana>
        </Container>
    );
}

function corFonteDia(selecionado) {
    if(selecionado) return "var(--cor-fundo-footer)";
    else return "var(--cor-cinza-claro)";
}

function corFundoDia(selecionado) {
    if(selecionado) return "var(--cor-cinza-claro)";
    else return "var(--cor-fundo-footer)";
} 

const Container = styled.div`
    width: 340px;
    height: auto;
    background-color: var(--cor-fundo-footer);
    margin-left: 17px;
    margin-right: 18px;
    padding-top: 15px;
    padding-left: 19px;
    padding-right: 18px;
    padding-bottom: 23px;
    margin-top: 13px;


`;

const Name = styled.div`

    display: flex;
    justify-content: space-between;

    h2 {
        color: var(--cor-cinza-escuro);
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        
    }
`
const Semana = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 250px;
    height: 30px;
    background-color: var(--cor-fundo-footer);
    margin-right: 18px;
    margin-top: 10px;
    padding-bottom: 10px;

`;

const Day = styled.div `
    width: 30px;
    height: 30px;
    margin-right:4px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    padding-top: 4px;
    color: ${({selecionado}) => corFonteDia(selecionado)};
    background-color: ${({selecionado}) => corFundoDia(selecionado)};

`


