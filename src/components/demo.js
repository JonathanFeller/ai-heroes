import React from 'react';
import ChatBox from './chatbox';
import './demo.css';

import fondoIngreso from '../assets/fondo-ingreso.jpg';

const Demo = () => (
  <div className="page-board">
    <section className="section-personaje">
      <div className="blackboard">
        <div className="user-account">
          <iframe title="video" width="100%" height="100%"
            src="https://www.youtube.com/embed/izDxpfOIF6M?rel=0&amp;autoplay=1&mute=1&loop=1" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="line"></div>
        <ChatBox />
      </div>
    </section>
    <section className="section-video">
      <div className="mascota">
        <img src={fondoIngreso} alt="" />
      </div>
    </section>
  </div>
);

export default Demo;