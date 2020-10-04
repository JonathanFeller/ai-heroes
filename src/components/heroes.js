import React from 'react';
import { useHistory } from 'react-router-dom';
import './heroes.css';

const Heroes = () => {
  const history = useHistory();

  const heroes = [
    {
      name: "Albert Einstein",
      quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      location: "Germany",
      occupation: "Theorical physicist",
      contribuitions: "General Relativity, Gravitational Waves, Wormholes",
      available: true
    },
    {
      name: "Marie Curie",
      quote: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
      location: "Poland",
      occupation: "Physicist, Chemist",
      contribuitions: "Discovered radioactivity, Championed use of portable X- rays, Found polonium and radium",
      available: false
    },
    {
      name: "Isaac Newton",
      quote: "No great discovery was ever made without a bold guess.",
      location: "England",
      occupation: "Mathematician, Physicist, Astronomer, Chemist",
      contribuitions: "Discovered the laws of gravity and motion, Invented calculus, Helped to shape our rational world view",
      available: false
    },
    {
      name: "Srinivasa Ramanuja",
      quote: "An equation means nothing to me unless it expresses a thought of God.",
      location: "India",
      occupation: "Mathematician",
      contribuitions: "Complex analysis, Number theory, Infinite series",
      available: false
    },
    {
      name: "Neil Armstrong",
      quote: "That's one small step for man, one giant leap for mankind.",
      location: "United States",
      occupation: "Astronaut, Aeronautical, Engineer",
      contribuitions: "The first man to walk on the moon, He flew on two space missions",
      available: false
    },
    {
      name: "Galileo Galilei",
      quote: "I have never met a man so ignorant that I couldn't learn something from him.",
      location: "Italy",
      occupation: "Philosopher, Astronomer, Mathematician",
      contribuitions: "Discovered the four biggest moons of Jupiter, Heliocentrism, The father of observational astronomy",
      available: false
    },
    {
      name: "Hypatia of Alexandria",
      quote: "Reserve your right to think, for even to think wrongly is better than not to think at all.",
      location: "Egypt",
      occupation: "Mathematician, Astronomer, Philosopher",
      contribuitions: "First woman astronomer, Early maps of objects in the sky, Construction of plane astrolabes",
      available: false
    },
    {
      name: "Kalpana Chawla",
      quote: "If you want do something, what does it matter where you are ranked?.",
      location: "India",
      occupation: "Astronaut, Engineer",
      contribuitions: "First woman of Indian origin to go to space, Logged 30 days, 14 hours, and 54 minutes in space over the course of her two missions",
      available: false
    },
    {
      name: "Dorothy Vaughan",
      quote: "I changed what I could and what I couldn't, I endured.",
      location: "United States",
      occupation: "Mathematician And Human Computer",
      contribuitions: "The first African-American woman to supervise a goup of staff at the center, Machine computers in the early 1960s by teaching herself and her staff, Vaughan crater on the far side of the Moon was named in her honor",
      available: false
    },
    {
      name: "Stephen Hawking",
      quote: "Quiet people have the loudest minds.",
      location: "England",
      occupation: "Theoretical Physicist",
      contribuitions: "Black holes, Relativity theory and Quantum Mechanic, Space-time singularities",
      available: false
    }
  ];

  const handleClick = () => {
    history.push('/demo');
  }

  const renderCards = () => (
    heroes.map(hero => (
      <div className="item">
        <div className="card">
          <div className="image-card">
            <img src="image/Dorothy Vaughan.png" alt={hero.name} />
          </div>
          <div className="name-card">
            <h2>{hero.name}</h2>
          </div>
          <div className="card-description">
            <p>{hero.quote}</p>
          </div>
          <div className="card-option">
            <div className="card-ubication">
              <p>Location</p>
              <p>{hero.location}</p>
            </div>
            <div className="class-occupation">
              <p>Ocupation</p>
              <p>{hero.occupation}</p>
            </div>
          </div>
          <div className="card-theme">
            <p>Main Theories</p>
            <div className="card-theme-item">
              <div>General</div>
              <div>Gravitational</div>
              <div>Wormholes</div>
            </div>
          </div>
          <div className="card-btn">
            {hero.available ? <button type="button" onClick={handleClick}>I want to meet him</button> : <div>Not available</div>}
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className="container">
      <div className="information-start">
        <div className="start">
          <div className="start-text">
            <h2>
              Select your A.I. Hero / A.I. Heroine
            </h2>
          </div>
          <div className="carrousel-pets owl-carousel">
            {renderCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;