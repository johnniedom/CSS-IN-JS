import React from "react";
import styled from "styled-components";

import { COLORS } from "../constant";
console.log(COLORS);
const Button = ({ variant, size, children }) => {
  return (
    <>
      <BtnWrapper size={size} variant={variant}>
        {children}
      </BtnWrapper>
    </>
  );
};


// THis Ideas work but it seem way more complex to Mange
// A better Solution is using Css Variables.




const BtnWrapper = styled.button`
  font-family: Robot;
  border-radius: 4px;
  padding: 8px 24px;
  border: none;
  font-size: ${(props) => props.size === "small" && 1}rem;
  font-size: ${(props) => props.size === "medium" && 18 / 16}rem;
  font-size: ${(props) => props.size === "large" && 21 / 16}rem;
  background: ${(prop) => prop.variant === "fill" && COLORS.primary};
  color: ${(prop) => prop.variant === "fill" && COLORS.white};
  background: ${(prop) => prop.variant === "outline" && COLORS.white};
  background: ${(prop) =>
    prop.variant === "ghost" &&
    prop.size === "medium" &&
    COLORS.transparentGray15};
  background: ${(prop) =>
    prop.variant === "ghost" && prop.size === "small" && COLORS.offwhite};
`;

//

export default Button;
