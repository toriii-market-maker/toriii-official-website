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
  targetId,
}) => {
  return (
    <a href={`#${targetId}`} className={`header-text-default ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`about-us ${divClassName}`}>{text}</div>
      </div>
    </a>
  );
};

HeaderTextDefault.propTypes = {
  text: PropTypes.string,
  targetId: PropTypes.string.isRequired,
};
