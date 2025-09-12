import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';
import Filme from './pages/Filme';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <Home/> } />
                <Route path="/filme/:id" element= { <Filme/> } />
                <Route path="/favoritos" element= { <Favoritos/> } />

                <Route path="Erro" element= { <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;