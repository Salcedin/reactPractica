//IMPORTS --------------------------------------------------
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componentes/header';
import UserInfo from './componentes/UserInfo';
import UserData from './componentes/UserData';
import Footer from './componentes/Footer';
import Fotos from './componentes/fotosKratos';
import Videos from './componentes/videos';
import Audio from './componentes/Audios';
//----------------------------------------------------------

function App() {
  return (
    <div>
      <Header />
      <UserInfo Nombre={"Miguel Ángel"} Edad={25} Ubicación={"Albacete, España"} Descripcion={"Estudiante de segundo año de DAW"}/>
      <UserData />
      <Audio/>
      <Videos/>
      <Fotos/>
      <Footer />
    </div>
  );
}

export default App;
