import React from 'react';
import ChatBox from './chatbox';
import './demo.css';

const Demo = () => (
  <div className="page-board">
    <section className="section-personaje">
      <div className="blackboard">
        <div className="user-account">
          <iframe title="video" width="100%" height="100%"
            src="https://www.youtube.com/embed/izDxpfOIF6M?rel=0&amp;autoplay=1&mute=0&loop=1" frameBorder="0"
            autoplay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="line"></div>
        <ChatBox />
      </div>
    </section>
    <section className="section-video">
      <div className="mascota">
        <iframe title="blackboard" width="100%" height="100%"
          src="https://images-assets.nasa.gov/video/GSFC_20181002_SMBH_m13043_Simulation/GSFC_20181002_SMBH_m13043_Simulation~orig.mp4?rel=0&amp;autoplay=1&mute=1&loop=1"
          frameborder="0" autoplay
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  </div>
);

export default Demo;