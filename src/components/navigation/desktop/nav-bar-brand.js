import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://pixabay.com/get/gfe1fdc4ded3292c79b8bf2017ca0cb4e68409024f1e1740a760265c8a6db33945d5f1bf339c27d8126728df9f1d06ece.svg"
          alt="Auth0 shield logo"
          width="244"
          height="72"
        />
      </NavLink>
    </div>
  );
};