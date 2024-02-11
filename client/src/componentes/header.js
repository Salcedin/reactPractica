//Fichero para el Header.

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
import fotoSalcedin from '../images/salcedin.jpg';
//----------------------------------------------------------

const Header = () => {
    return (
        <header>
            <h1>Salcedin98</h1>
            <img src={fotoSalcedin} alt="Foto de Salcedin"/>
        </header>
    );
};

export default Header;