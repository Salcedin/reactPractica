//Fichero para las fotos de Kratos (que máquina el Kratos).

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
import fotoKratos from '../images/kratos.jpg';
import fotoKratosPelo from '../images/kratosPelo.png';
//----------------------------------------------------------

function Fotos() {
  return (
    <div className="kratos">
      <p>Foto sin editar</p>
      <img src={fotoKratos} alt="Foto de Kratos sin editar" />
      <p>Foto editada con Paint</p>
      <img src={fotoKratosPelo} alt="Foto de Kratos editada con Paint" />
    </div>
  );
}

export default Fotos;
