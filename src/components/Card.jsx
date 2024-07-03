import React from "react";

function Card(props) {
  return (
    <div className="card pt-5 pb-5">
      <img className="photo" src={`${props.img}`} />

      <div className="details pl-5">
        <div className="location mb-1">
          <img className="w-2 mr-1" src="world-icons/location-dot-solid.svg" />
          <p className="tracking-widest text-xs text-customPurple mr-2 uppercase">
            {props.country}
          </p>
          <a
            href={`${props.map}`}
            className="text-xs text-customGray underline"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="text-2xl font-bold text-customPurple mb-2">
          {props.place}
        </h2>
        <p className="font-bold text-xs mb-1">{props.date}</p>
        <p className="text-xs leading-5">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
