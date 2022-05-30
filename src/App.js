import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";
import TelaLogin from "./1-TelaLogin/TelaLogin";
import TelaCadastro from "./2-TelaCadastro/TelaCadastro";
import TelaHabitos from "./3-TelaHabitos/TelaHabitos";
import TelaHoje from "./4-TelaHoje/TelaHoje";
import TelaHistorico from "./5-TelaHistorico/TelaHistorico";

export default function App() {

     const [token, setToken] = useState("");
     const [clicado, setClicado] = useState(false);
     const [realizados, setRealizados] = useState([]); 
     const [deletados, setDeletados] = useState([]);
     const [habitosHoje, setHabitosHoje] = useState([]);


     const contextValue = { token, setToken, 
                            clicado, setClicado, 
                            realizados, setRealizados,
                            deletados, setDeletados,
                            habitosHoje, setHabitosHoje };

    return (

        <UserContext.Provider value={contextValue}>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />} />
            </Routes>
        </BrowserRouter>

        </UserContext.Provider>
    );

}