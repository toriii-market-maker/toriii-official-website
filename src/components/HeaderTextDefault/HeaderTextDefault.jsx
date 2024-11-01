/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeaderTextDefault = ({
  className,
  frameClassName,
  divClassName,
  text = "About Us",
}) => {
  return (
    <div className={`header-text-default ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`about-us ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

HeaderTextDefault.propTypes = {
  text: PropTypes.string,
};
