//Fichero para los audios

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
import audio1 from '../audios/XDsounds.mp3';
import audio2 from '../audios/XDsounds.wav';
//----------------------------------------------------------

const audio = () => {
    return (
        <div>
        <p>Audio en MP3</p>
        <audio src={audio1} controls="true" style={{ width: "100%", volume: 0.5 }}></audio>
        <hr/>
        <p>Audio en WAV</p>
        <audio src={audio2} controls="true" style={{ width: "100%", volume: 0.5 }}></audio>
    </div>
    );
};

export default audio;