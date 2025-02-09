import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CadVolPage from "./Pages/CadVolPage";
import ListaVoluntarios from './Pages/ListaVoluntarios'
import CadAtvExtra from "./Pages/CadAtvExtra";
import GestaoPresenca from "./Pages/GestaoPresenca";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/CadastroVoluntarios' element={<CadVolPage/>} />
                <Route path='/ListaDeVoluntarios' element={<ListaVoluntarios/>} />
                <Route path='/CadastroAtividadeExtra' element={<CadAtvExtra/>} />
                <Route path='/GestaoDePresemca' element={<GestaoPresenca/>} />

                <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;