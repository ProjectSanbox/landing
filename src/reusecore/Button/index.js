import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from './button.style';

const Button = ({ children, type,onClick, ...props }) => {
  const AllClasses = ["btn"];
  if (props.className) {
    AllClasses.push(props.className);
  } 

  return (
    <ButtonWrapper onClick={onClick} type={type} {...props} className={AllClasses.join(" ")}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.oneOf([ "button", "a", "span", "div" ]) //--
};

export default Button;
