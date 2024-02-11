// Footer.js

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
//----------------------------------------------------------

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contacto">
        <h2>DATOS DE CONTACTO</h2>
        <p>TLF: 633788085</p>
        <p>msg0022@alu.medac.es</p>
      </div>
      <div className="redes">
        <h2>MIS REDES SOCIALES</h2>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;