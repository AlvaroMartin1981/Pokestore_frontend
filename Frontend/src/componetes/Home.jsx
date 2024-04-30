import React from 'react';
import logo from '../assets/pokemonLogo.jpg'


const Home = () => {
  return (
    <>
      
      <header>
        <h1>Bienvenidos a Pokestore</h1>
        <img src={logo} alt="Logo de Pokemon" />
      </header>
      <footer>
        {/* Contenido opcional del pie de página */}
      </footer>
    </>
  );
};

export default Home;
