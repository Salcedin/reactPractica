//Fichero para los vídeos.

//IMPORTS --------------------------------------------------
import React from 'react';
import './styles.css';
import video1 from '../videos/metal.mkv';
import video2 from '../videos/metal.mp4';
//----------------------------------------------------------

const videos = () => {
    return (
        <div className="video">
            <p>Vídeo en MKV. Se recomienda bajar el sonido.</p>
            <video src={video1} style={{width: '20%', height: '20%'}} controls></video>
            <video src={video2} style={{width: '20%', height: '20%'}} controls></video>
            <p>Vídeo en MP4. Se recomienda bajar el sonido.</p>
        </div>
    );
};

export default videos;