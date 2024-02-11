//Fichero para la info del usuario.

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
//----------------------------------------------------------

const UserInfo = ({ Nombre, Edad, Ubicación, Descripcion }) => {
  return (
    <div className="infoUsuario">
      <h2>Información Personal</h2>
      <p><b>Nombre:</b> {Nombre}</p>
      <p><b>Edad:</b> {Edad}</p>
      <p><b>Ubicación:</b>  {Ubicación}</p>
      <p><b>Descripción:</b>  {Descripcion}</p>
    </div>
  );
};

export default UserInfo;