import React from "react";

export const HeroBanner = () => {
  const logo =
    "https://pixabay.com/get/gf0356b851418a35cb2bdfe9f81e68fd4173f143d92b8abc508d442ffdb90513093df1b598a589fbd310839d95ca984ce.svg";
  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">
        Welcome to LA (Lower Alabama) Chat!
      </h1>
      <p className="hero-banner__description">
        This project was made using Rails/React, Zustand, Action Cable, Auth0
        and TailwindCSS w/DaisyUi library.
      </p>
    </div>
  );
};