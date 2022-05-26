import React from 'react';
import logoInicial from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

//usar a biblioteca react-loader-spinner para efeito de 'loading'


export default function TelaLogin () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");

    const navigate = useNavigate();

    function fazerLogin (event) {
        event.preventDefault(); //por causa do form

        const login = {
            email: email,
            password: senha
        }

        const config = { //precisa disso quando envia o post? ou só na página que recebe para ter autorização?
            headers: {
                "Authorization": {token}
            }
        }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login, config);
        promise.then(res => {
            setToken(res.data.token);
            console.log(res.data);
            navigate('/hoje')}); 
            promise.catch(err => {
                console.log(err);
                alert("Dados incorretos! Preencha os campos novamente.")});

    }

    return(
        <Container>
        <div className="logo-inicial">
            <img src={logoInicial} alt="IMG" width="210px" height="200px" />
        </div>
        <form onSubmit={fazerLogin}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="  e-mail"></input>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="  senha"></input>
            <button type="submit">Entrar</button>
        </form>
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