import React from 'react';

const Home = () => (
  <main className="Home-main">
    <div className="mascots">
      <img src={'./assets/heroes/Albert_Einstien.png'} alt="Albert Einstein" />
      <img src={'./assets/heroes/Dorothy Vaughan.png'} alt="Dorothy Vaughan" />
      <img src={'./assets/heroes/Galileo Galilei.png'} alt="Galileo Galilei" />
      <img src={'./assets/heroes/Hypatia of Alexandria.png'} alt="Hypatia of Alexandria" />
      <img src={'./assets/heroes/Kalpana Chawla.png'} alt="Kalpana Chawla" />
    </div>
    <p>You can learn about their own scientific theories, contrast what they had at their time in contrast to the information</p>
    <div className="mascots">
      <img src={'./assets/heroes/Marie_Curie.png'} alt="Marie Curie" />
      <img src={'./assets/heroes/Neil_Armstrong.png'} alt="Neil Armstrong" />
      <img src={'./assets/heroes/Newton-.png'} alt="Newton" />
      <img src={'./assets/heroes/Ramanujan.png'} alt="Ramanujan" />
    </div>
  </main>
);

export default Home;