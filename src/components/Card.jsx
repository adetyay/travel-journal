import React from "react";

function Card() {
  return (
    <div className="card mb-8">
      <img className="photo" src="images/japan.jpg" />

      <div className="details pl-5">
        <div className="location mb-1">
          <img className="w-2 mr-1" src="world-icons/location-dot-solid.svg" />
          <p className="tracking-widest text-xs text-customPurple mr-2">
            JAPAN
          </p>
          <p className="text-xs text-customGray underline">
            View on Google Maps
          </p>
        </div>

        <h2 className="text-2xl font-bold text-customPurple mb-2">
          Mount Fuji
        </h2>
        <p className="font-bold text-xs mb-1">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="text-xs leading-5">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;
