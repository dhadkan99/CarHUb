import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, onSelect }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default CarList;
