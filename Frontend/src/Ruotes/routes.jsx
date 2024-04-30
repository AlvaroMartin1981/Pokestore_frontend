import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useProducts } from '../usecontext/ProductContext.jsx';
import { useUser } from '../usecontext/UserContext.jsx';
import Cards from '../componetes/Cards.jsx';
import Nav from '../componetes/Nav.jsx';
import ProductDetail from '../componetes/ProductDetail.jsx';
import ProductType from '../componetes/ProductType.jsx';
import Legendarios from '../componetes/Lengendario.jsx';
import Mythical from '../componetes/Mythical.jsx';
import LoginForm from '../forms/LoginForm.jsx';
import RegisterForm from '../forms/RegisterForm.jsx';
import Home from '../componetes/Home.jsx';
import AdminForm from '../forms/AdminForm.jsx';
import Dashboard from '../componetes/Dashboard.jsx';



function Rutas() {
    const { pokemon, items } = useProducts();
    const { user } = useUser();

    const isAuthenticated = () => {
        const authenticated = user !== null;
        console.log('¿Usuario autenticado?', authenticated);
        return authenticated;
    };

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/Home" element={<Home  />} />
                <Route path="/login" element={isAuthenticated() ? <Navigate to="/pokemon" /> : <LoginForm />} />
                <Route path="/register" element={isAuthenticated() ? <Navigate to="/pokemon" /> : <RegisterForm />} />
                <Route path="/admin" element={<AdminForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pokemon" element={<Cards products={pokemon} />} />
                <Route path="/items" element={<Cards products={items} />} />
                <Route path="/pokemon/legendarios" element={<Legendarios />} />
                <Route path="/pokemon/misticos" element={<Mythical />} />
                <Route path="/pokemon/tipo/:tipo" element={<ProductType />} />
                <Route path="/items/tipo/:tipo" element={<ProductType />} />
                <Route path="/product/:nombre" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default Rutas;
