import React from "react";
import Dataregister from "./journey/dataregister/Dataregister";
import Schedule from "./journey/schedule/Schedule";
import Title from "./journey/title/Title";
import "./Journey.css";

function Journey() {
  return (
    <div className="journey-page">
      {/* title */}
      <Title />

      {/* schedule */}
      <Schedule />

      {/* register */}
      <Dataregister />
    </div>
  );
}

export default Journey;
