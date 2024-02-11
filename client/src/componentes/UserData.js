// Fichero para los datos del usuario.

//IMPORTS --------------------------------------------------
import React, { useState, useEffect } from 'react';
import './styles.css';
//----------------------------------------------------------

const UserData = () => {
  const [seguidores, setSeguidores] = useState(603026);
  const [siguiendo, setSiguiendo] = useState(false);

  // Función para seguir o dejar de seguir al usuario
  const seguirUsuario = () => {
    const nuevoEstado = !siguiendo;
    setSiguiendo(nuevoEstado);
    localStorage.setItem('siguiendo', JSON.stringify(nuevoEstado));
    setSeguidores(seguidores + (nuevoEstado ? 1 : -1)); 
  };

  useEffect(() => {
    const estadoAlmacenado = localStorage.getItem('siguiendo');
    if (estadoAlmacenado) {
      setSiguiendo(JSON.parse(estadoAlmacenado));
    }
  }, []);

  return (
    <div className="datosUsuario">
      <h2>Datos del usuario</h2>
      <div className="datos">
        <h3>Seguidores</h3>
        <p>{seguidores}</p>
        <button className={`boton ${siguiendo ? 'boton-rojo' : ''}`} onClick={seguirUsuario}>
          {siguiendo ? 'Dejar de seguir' : 'Seguir'}
        </button>
      </div>
      <div className="datos">
        <h3>Seguidos</h3>
        <p>1</p>
      </div>
      <div className="datos">
        <h3>Publicaciones</h3>
        <p>7</p>
      </div>
    </div>
  );
};

export default UserData;