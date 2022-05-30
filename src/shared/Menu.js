import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { render } from "react-dom";



export default function Menu () {

    const { realizados, habitosHoje } = useContext(UserContext);

    const porcentagemHoje = realizados.length/habitosHoje.length


    return(
        <Rodape>
            <Link style={{textDecoration: 'none'}} to="/habitos">
                <h2>Hábitos</h2>
            </Link>
           
                <Link style={{textDecoration: 'none'}} to="/hoje">
                    <CirculoAzul>
                         <CircularProgressbar value={porcentagemHoje} maxValue={1} text="Hoje" background={true} backgroundPadding={6} styles={buildStyles ({
                             textSize: '18px', textColor: '#FFFFFF', backgroundColor: '#52B6FF', pathColor: 'white', trailColor: '#52B6FF', strokeLinecap: 'butt'
                         })}> 
                         Hoje
                         </CircularProgressbar>  
                    </CirculoAzul>
                </Link>
           
            <Link style={{textDecoration: 'none'}} to="/historico">
            <h2>Histórico</h2>
            </Link>
        </Rodape>
    );
}



const CirculoAzul = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;

    width: 91px;
    height: 91px;
    border-radius: 98.5px;
    background-color: var(--cor-azul-claro);
    text-align: center;
    color: var(--cor-fundo-footer);
    padding-top: 2px;
    padding-bottom: 2px;
    margin-bottom: 40px;
`;

const Rodape = styled.div`
	width: 100%;
	height: 70px;
    background-color: var(--cor-fundo-footer);
    color: var(--cor-azul-claro);
    text-decoration: none;
    padding-left: 18px;
    padding-right: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px; 
    z-index: 1;
 
`;