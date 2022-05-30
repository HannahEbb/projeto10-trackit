import { useContext } from "react";
import UserContext from "../UserContext";
import axios from 'axios';
import styled from 'styled-components';
import { Checkbox } from 'react-ionicons'



export default function HabitoDoDia({habitoHojeId, nameHoje, done, currentSequence, highestSequence}) {
    
    const { token, realizados, setRealizados } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function marcarHabito () {
        if(done === false) {

            const URL1 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoHojeId}/check`

            const promise = axios.post(URL1, {}, config);

            promise.then( response => {
                setRealizados([...realizados, habitoHojeId]);
            })

        } else {

            const URL2 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoHojeId}/uncheck`

            const promise = axios.post(URL2, {}, config);

            promise.then( response => {
                console.log(response);
                const novosRealizados = realizados.filter(d => d !== habitoHojeId);
                setRealizados(novosRealizados);
            })
        }
       
    }

    return(
        <Container>
            <Texto>
                <p>{nameHoje}</p>
                <h2>Sequência atual: {currentSequence} dias</h2>
                <h2>Seu recorde: {highestSequence} dias</h2>
            </Texto>
            <Checkbox onClick={marcarHabito} color={done ? '#8FC549' : '#EBEBEB'} border={'#E7E7E7'} height="69px" width="69px"/>
        </Container>
    );
}

const Container =styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: auto;
    background-color: var(--cor-fundo-footer);
    border-radius: 5px;
    padding-top: 13px;
    padding-left: 13px;
    padding-right: 13px;
    padding-bottom: 13px;
    margin-bottom: 10px;

`

const Texto = styled.div`

    p {
        font-size: 20px;
        font-weight: 400;
        color: var(--cor-cinza-escuro);
        margin-bottom: 7px;
    }

    h2 {
        font-size: 13px;
        font-weight: 400;
        line-height: 16.22px;
        color: var(--cor-cinza-escuro);
    }

`