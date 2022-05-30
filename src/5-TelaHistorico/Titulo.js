import styled from 'styled-components';



export default function Titulo() {
    return(
        <Container>
        <p>Histórico</p>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Container>
    );
}

const Container = styled.div `
    
    width: 100%
    height: 100px;
    background-color: var(--cor-cinza-claro);
    padding-top: 28px;
    padding-left: 17px;
    
    p {
        font-size: 23px;
        color: var(--cor-azul-escuro);
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        color: #666666;
        line-height: 24px;
        margin-top: 10px;
    }

`;