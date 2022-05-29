import styled from 'styled-components';


export default function Dia (props) {

    const { id, inicial, selecionado, aoSelecionar } = props;

    function selecionarDias() {
        aoSelecionar(id);
    }

    return(
        <Container selecionado={selecionado} 
        onClick={selecionarDias}>{inicial}
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


const Container = styled.div `{
   
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

    }`;