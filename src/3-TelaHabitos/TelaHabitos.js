import styled from 'styled-components';
import Topo from "../shared/Topo";
import Menu from "../shared/Menu";
import Header from "./Header";
import Habitos from './Habitos';

export default function TelaHabitos () {

    return(
       <>
      
        <Topo />
        <Container>
            <Header />
            <Habitos />
            <Menu />
        </Container>
       </>
    );
}

const Container = styled.div`
height: 800px;
background-color: var(--cor-cinza-claro);
`;

//Como adicionar scroll no Container caso tenho o overflow? Projeto Instagram

