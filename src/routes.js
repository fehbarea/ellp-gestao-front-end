import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;