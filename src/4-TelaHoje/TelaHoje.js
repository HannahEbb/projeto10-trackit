import styled from 'styled-components';
import Topo from "../shared/Topo";
import Data from "./Data";
import Hoje from './Hoje';
import Menu from '../shared/Menu';


export default function TelaHoje () {

    return(
        <>
        <Topo />
        <Data />
            <Container>
                <Hoje />
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