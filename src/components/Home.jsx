// src/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Elimina la bandera de autenticación
        localStorage.removeItem('authenticated');
        // Redirige a la página de inicio de sesión
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
