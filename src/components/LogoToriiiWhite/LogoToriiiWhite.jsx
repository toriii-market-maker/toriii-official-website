/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoToriiiWhite = ({
  className,
  logoToriiiWhite = "https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-6.png",
}) => {
  return (
    <img
      className={`logo-toriii-white ${className}`}
      alt="Logo toriii white"
      src={logoToriiiWhite}
    />
  );
};

LogoToriiiWhite.propTypes = {
  logoToriiiWhite: PropTypes.string,
};
