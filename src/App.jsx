import React, { useState, useRef, useEffect } from "react";
import cars from "./data/cars";
import "./App.css";

function App() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const currentCar = cars[currentCarIndex];
  const audioRef = useRef(new Audio(currentCar.sound));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    audioRef.current.src = currentCar.sound;
    audioRef.current.load();
    setAnimate(true);

    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [currentCar]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleNextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
    playSound();
  };

  const handlePrevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
    playSound();
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          Cars <span>HUB</span>
        </div>
        <div className="language">🌐 English</div>
      </nav>

      <div className={`hero ${animate ? "animate" : ""}`}>
        <div className="hero-text">
          <h1>{currentCar.name}</h1>
          <p className="description">{currentCar.description}</p>
          <ul>
            <li>
              <strong>Engine:</strong> {currentCar.engine}
            </li>
            <li>
              <strong>Horsepower:</strong> {currentCar.horsepower} hp
            </li>
            <li>
              <strong>Torque:</strong> {currentCar.torque}
            </li>
            <li>
              <strong>Top Speed:</strong> {currentCar.topSpeed}
            </li>
            <li>
              <strong>0–60 mph:</strong> {currentCar.zeroToSixty}
            </li>
          </ul>

          <div className="stats">
            <div className="stat">
              <h3>250+</h3>
              <p>Cars Sold</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>150+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={currentCar.image} alt={currentCar.name} />
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrevCar}>←</button>
        <button onClick={playSound}>Play Sound</button>
        <button onClick={handleNextCar}>→</button>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Car Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
