import styled from 'styled-components';
import trackit from "../assets/trackit.png";

//A src da foto deve ser passada via CONTEXT API, pegando dados da API pelo GET

export default function Topo () {

    return(
        <Barra>
            <img src={trackit} width="97px" height="32px" alt="logo"/>
            <Foto>
            <img src="https://s2.glbimg.com/k7N9JKFDftF5ghR6CTPQ08d2UVU=/0x0:960x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/B/MXaqi8Tr6eLqPF3rCD8w/whatsapp-image-2019-11-13-at-09.56.14.jpeg " width="51px" height="51px" alt="foto-perfil"/>
            </Foto>
        </Barra>
    );
}

const Barra = styled.div`
	width: 100%;
	height: 70px;
    background-color: var(--cor-azul-escuro);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-left: 18px;
    padding-right: 10px;
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center
    overflow-y: false;
    position: fixed;
    z-index: 1;
    top: 0px; 
`;

const Foto = styled.div`
	
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
	}
 
`;