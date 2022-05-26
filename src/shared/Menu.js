import styled from 'styled-components';
import { Link } from "react-router-dom";



export default function Menu () {

    return(
        <Rodape>
            <Link style={{textDecoration: 'none'}} to="/habitos">
                <h2>Hábitos</h2>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/hoje">
                <div>Hoje</div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/historico">
            <h2>Histórico</h2>
            </Link>
        </Rodape>
    );
}

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
    

    div {
        width: 91px;
        height: 91px;
        border-radius: 98.5px;
        background-color: var(--cor-azul-claro);
        text-align: center;
        color: var(--cor-fundo-footer);
        padding-top: 35px;
        margin-bottom: 40px;
	}
 
`;