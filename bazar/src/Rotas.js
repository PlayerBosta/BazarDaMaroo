import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Layout from './Paginas/Layout';
import Produto from './Paginas/Produto';
import ProdutoCreate from './Paginas/Produto/create';
import ProdutoUpdate from './Paginas/update';
import ProdutoDelete from './Paginas/Delete';

export default function Rotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={ <Home /> } />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="produto" element={<Produto />} />
                    <Route path="produto/create" element={<ProdutoCreate />} />
                    <Route path="produto/update/:id" element={<ProdutoUpdate/>} />
                    <Route path="produto/delete/:id" element={<ProdutoDelete/>} />
            <Route path="*" element={<h1>Inexistente</h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
    }