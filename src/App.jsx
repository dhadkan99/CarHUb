import React, { useState, useRef } from "react";
import cars from "./data/cars";
import "./App.css";

function App() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const currentCar = cars[currentCarIndex];

  // Reference to the audio element
  const switchSoundRef = useRef(null);

  const playSound = () => {
    if (switchSoundRef.current) {
      switchSoundRef.current.currentTime = 0;
      switchSoundRef.current.play();
    }
  };

  const handleNextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
    playSound();
  };

  const handlePrevCar = () => {
    setCurrentCarIndex(
      (prevIndex) => (prevIndex - 1 + cars.length) % cars.length
    );
    playSound();
  };

  return (
    <div className="App">
      <h1 className="Head">Car Hub</h1>

      <div className="hero-section">
        <div className="hero-content">
          <h2>{currentCar.name}</h2>
          <p>{currentCar.description}</p>
          <ul>
            <li>
              <strong>Engine:</strong> {currentCar.engine}
            </li>
            <li>
              <strong>Horsepower:</strong> {currentCar.horsepower}
            </li>
          </ul>
        </div>

        <div className="hero-image-container">
          <img
            src={currentCar.image}
            alt={currentCar.name}
            className="car-image"
          />
        </div>
      </div>

      <div className="navigation-arrows">
        <button className="arrow-button" onClick={handlePrevCar}>
          ←
        </button>
        <button className="arrow-button" onClick={handleNextCar}>
          →
        </button>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Car Hub. All rights reserved.</p>
      </footer>

      {/* Audio element */}
      <audio ref={switchSoundRef} src="/switch.mp3" preload="auto" />
    </div>
  );
}

export default App;
