import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CadVolPage from "./Pages/CadVolPage";
import ListaVoluntarios from './Pages/ListaVoluntarios'
import CadAtvExtra from "./Pages/CadAtvExtra";
import ListaAtvExtra from "./Pages/ListaAtvExtra";
import GestaoPresencaAtvExtra from "./Pages/GestaoPresencaAtvExtra";
import ListaOficina from "./Pages/ListaOficina";
import CadAlunoPage from "./Pages/CadAlunoPage";
import CadastroOficina from "./Pages/CadastroOficina";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/CadastroVoluntarios' element={<CadVolPage/>} />
                <Route path='/ListaDeVoluntarios' element={<ListaVoluntarios/>} />
                <Route path='/CadastroAtividadeExtra' element={<CadAtvExtra/>} />
                <Route path='/GestaoDePresencaAtividadesExtras/:id' element={<GestaoPresencaAtvExtra/>} />
                <Route path='/ListaDeAtividades' element={<ListaAtvExtra/>} />
                <Route path='/ListaDeOficinas' element={<ListaOficina/>} />
                <Route path='/CadastroOficina' element={<CadastroOficina/>} />
                <Route path='/CadastroAlunos' element={<CadAlunoPage/>} />

                <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;