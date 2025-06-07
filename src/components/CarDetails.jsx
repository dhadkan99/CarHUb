import React from "react";

const CarDetails = ({ car, onBack }) => {
  return (
    <div className="car-details">
      <button onClick={onBack}>Back to List</button>
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <ul>
        <li>
          <strong>Engine:</strong> {car.engine}
        </li>
        <li>
          <strong>Horsepower:</strong> {car.horsepower} HP
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
