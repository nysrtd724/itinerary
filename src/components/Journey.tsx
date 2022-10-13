import React from "react";
import Register from "./journey/register/ Register";
import Schedule from "./journey/schedule/Schedule";
import Title from "./journey/title/Title";

function Journey() {
  return (
    <div>
      {/* title */}
      <Title />

      {/* schedule */}
      <Schedule />

      {/* register */}
      <Register />
    </div>
  );
}

export default Journey;
