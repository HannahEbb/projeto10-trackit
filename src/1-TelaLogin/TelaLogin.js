import React from 'react';
import logoInicial from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default function TelaLogin () {

    return(
        <Container>
        <div className="logo-inicial">
            <img src={logoInicial} alt="IMG" width="210px" height="200px" />
        </div>
        <div>
            <input type="text" placeholder="  e-mail"></input>
            <input type="text" placeholder="  senha"></input>
            <button>Entrar</button>
        </div>
        <div>
            <Link to="/cadastro">
                <h2>Não tem uma conta? Cadastre-se!</h2>
            </Link>
        </div>
        </Container>
    );
}


const Container = styled.div`
	width: 100%;
	height: 896px;
	padding-top: 90px;
    padding-left: 36px;
    padding-right: 36px;
    text-align: center;

    img {
        margin-bottom: 65px;
        margin-left: auto;
        margin-right: auto;
	}

    input {
		width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        color: var(--cor-cinza-escuro);
        ::placeholder {
            color: var(--cor-cinza-claro);
        }
	}


    button {
		width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        background: var(--cor-azul-claro);
        border-radius: 4.63636px;
        color: var(--cor-fundo-footer);
        font-size: 21px;
        font-weight: 400;
	}

    h2 {
        margin-top: 25px;
        font-size: 16px;
        font-weight: 400;
        color: var(--cor-azul-claro);
    }
`;