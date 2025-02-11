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
import ListaAlunos from "./Pages/ListaAlunos";
import CadastroOficina from "./Pages/CadastroOficina";
import AcessoNegado from './Pages/AcessoNegado';
import GestaoPresencaOficina from "./Pages/GestaoPresencaOficina";
import LideresDep from "./Pages/PrivLiderPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='Login' element={<Login/>}/>

                <Route element={<ProtectedRoute/>}>
                
                <Route path='/Home' element={<Home/>}/>
                <Route path='/CadastroVoluntarios' element={<CadVolPage/>} />
                <Route path='/CadastroVoluntarios/:id' element={<CadVolPage/>} />
                <Route path='/ListaDeVoluntarios' element={<ListaVoluntarios/>} />
                <Route path='/CadastroAtividadeExtra' element={<CadAtvExtra/>} />
                <Route path='/GestaoDePresencaAtividadesExtras/:id' element={<GestaoPresencaAtvExtra/>} />
                <Route path='/ListaDeAtividades' element={<ListaAtvExtra/>} />
                <Route path='/ListaDeOficinas' element={<ListaOficina/>} />
                <Route path='/CadastroOficina' element={<CadastroOficina/>} />
                <Route path='/CadastroOficina/:id' element={<CadastroOficina/>} />
                <Route path='/CadastroAlunos' element={<CadAlunoPage/>} />
                <Route path='/CadastroAlunos/id' element={<CadAlunoPage/>} />
                <Route path='/ListaAlunos' element={<ListaAlunos/>} />
                <Route path='/PresencaOficinas/:id' element={<GestaoPresencaOficina/>} />
                <Route path='/AcessoNegado' element={<AcessoNegado/>} />

                <Route path='/LideresDep' element={<LideresDep/>} />
                </Route>

                <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;