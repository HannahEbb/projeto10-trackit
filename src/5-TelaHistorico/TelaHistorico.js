import styled from 'styled-components';
import Topo from "../shared/Topo";
import Titulo from "./Titulo";
import Historico from "./Historico";
import Menu from "../shared/Menu";


export default function TelaHistorico () {

    return(
        <>
        <Topo />
        <Titulo />
            <Container>
                <Historico />
            </Container>
        <Menu />
        </>
    );
}

const Container = styled.div `

    height: 800px;
    background-color: var(--cor-cinza-claro);    
    overflow-y: true

`