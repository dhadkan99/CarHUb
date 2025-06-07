import React from "react";
import cars from "./cars";

const CarComponent = () => {
  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Car Showcase with Sounds
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h2>
              <p className="text-gray-600 my-2">{car.description}</p>
              <ul className="text-sm text-gray-700">
                <li>
                  <strong>Engine:</strong> {car.engine}
                </li>
                <li>
                  <strong>Horsepower:</strong> {car.horsepower} hp
                </li>
              </ul>
              <button
                onClick={() => playSound(car.sound)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-200"
              >
                🔊 Play Sound
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarComponent;
