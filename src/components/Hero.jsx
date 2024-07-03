import React from "react";
import Card from "./Card";
import data from "../data";

function Hero() {
  const details = data.map((place) => {
    return (
      <Card
        img={place.imageUrl}
        place={place.title}
        country={place.location}
        map={place.googleMapsUrl}
        date={`${place.startDate} - ${place.endDate}`}
        description={place.description}
      />
    )
  })
  return <div className="hero pt-5 pb-5 pl-10 pr-10 rounded-b-xl">{details}</div>;
}

export default Hero;
