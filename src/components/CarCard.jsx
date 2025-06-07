import React from "react";

const CarCard = ({ car, onSelect }) => {
  return (
    <div className="car-card" onClick={() => onSelect(car)}>
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
    </div>
  );
};

export default CarCard;
