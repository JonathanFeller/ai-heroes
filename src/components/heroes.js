import React from 'react';

const Heroes = () => {
  const heroes = [
    {
      name: "Albert Einstein",
      quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      location: "GERMANY",
      occupation: "THEORICAL PHYSICIST",
      contribuitions: "General Relativity, Gravitational Waves, Wormholes",
      available: true
    },
    {
      name: "Marie Curie",
      quote: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
      location: "POLAND",
      occupation: "PHYSICIST,CHEMIST",
      contribuitions: "Discovered radioactivity, Championed use of portable X- rays, Found polonium and radium",
      available: false
    },
    {
      name: "Isaac Newton",
      quote: "No great discovery was ever made without a bold guess.",
      location: "ENGLAND",
      occupation: "MATHEMATICIAN, PHYSICIST, ASTRONOMER, CHEMIST",
      contribuitions: "Discovered the laws of gravity and motion, Invented calculus, Helped to shape our rational world view",
      available: false
    },
    {
      name: "Srinivasa Ramanuja",
      quote: "An equation means nothing to me unless it expresses a thought of God.",
      location: "INDIA",
      occupation: "MATHEMATICIAN",
      contribuitions: "Complex analysis, Number theory, Infinite series",
      available: false
    },
    {
      name: "Neil Armstrong",
      quote: "That's one small step for man, one giant leap for mankind.",
      location: "UNITED STATES",
      occupation: "ASTRONAUT, AERONAUTICAL, ENGINEER",
      contribuitions: "The first man to walk on the moon, He flew on two space missions",
      available: false
    },
    {
      name: "Galileo Galilei",
      quote: "I have never met a man so ignorant that I couldn't learn something from him.",
      location: "ITALY",
      occupation: "PHILOSOPHER, ASTRONOMER, MATHEMATICIAN",
      contribuitions: "Discovered the four biggest moons of Jupiter, Heliocentrism, The father of observational astronomy",
      available: false
    },
    {
      name: "Hypatia of Alexandria",
      quote: "Reserve your right to think, for even to think wrongly is better than not to think at all.",
      location: "EGYPT",
      occupation: "MATHEMATICIAN, ASTRONOMER, PHILOSOPHER",
      contribuitions: "First woman astronomer, Early maps of objects in the sky, Construction of plane astrolabes",
      available: false
    },
    {
      name: "Kalpana Chawla",
      quote: "If you want do something, what does it matter where you are ranked?.",
      location: "INDIA",
      occupation: "ASTRONAUT, ENGINEER",
      contribuitions: "First woman of Indian origin to go to space, Logged 30 days, 14 hours, and 54 minutes in space over the course of her two missions",
      available: false
    },
    {
      name: "Dorothy Vaughan",
      quote: "I changed what I could and what I couldn't, I endured.",
      location: "UNITED STATES",
      occupation: "MATHEMATICIAN AND HUMAN COMPUTER",
      contribuitions: "The first African-American woman to supervise a goup of staff at the center, Machine computers in the early 1960s by teaching herself and her staff, Vaughan crater on the far side of the Moon was named in her honor",
      available: false
    },
    {
      name: "Stephen Hawking",
      quote: "Quiet people have the loudest minds.",
      location: "ENGLAND",
      occupation: "THEORETICAL PHYSICIST",
      contribuitions: "Black holes, Relativity theory and Quantum Mechanic, Space-time singularities",
      available: false
    }
  ];

  const renderCards = () => (
    heroes.map(hero => (
      <div class="item">
        <div class="card">
          <div class="image-card">
            <img src="image/Dorothy Vaughan.png" alt={hero.name} />
          </div>
          <div class="name-card">
            <h2>{hero.name}</h2>
          </div>
          <div class="card-description">
            <p>{hero.quote}</p>
          </div>
          <div class="card-option">
            <div class="card-ubication">
              <p>Location</p>
              <p>{hero.location}</p>
            </div>
            <div class="class-occupation">
              <p>Ocupation</p>
              <p>{hero.occupation}</p>
            </div>
          </div>
          <div class="card-theme">
            <p>Main Theories</p>
            <div class="card-theme-item">
              <div>General</div>
              <div>Gravitational</div>
              <div>Wormholes</div>
            </div>
          </div>
          <div class="card-btn">
            {hero.available ? <button type="button">I want to meet him</button> : <div>Not available</div>}
          </div>
        </div>
      </div>
    ))
  );

  return (
    <>
      {renderCards()}
    </>
  );
};

export default Heroes;