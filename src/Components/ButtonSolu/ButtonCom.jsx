import React from "react";
import styled from "styled-components";

import { COLORS } from "../constant";

// Better Way of Styling Producing dynamic styles
// using Css-Variables

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--padding": "8px 16px",
    "--fontSize": "1rem",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--padding": "16px 24px",
    "--fontSize": 18 / 16 + "rem",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--padding": "20px 36px",
    "--fontSize": 21 / 16 + "rem",
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];
  let ButtonVariant;
  if (variant === "fill") {
    ButtonVariant = FillBtn;
  }
  if (variant === "outline") {
    ButtonVariant = FillBtn;
  }
  if (variant === "Ghost") {
    ButtonVariant = FillBtn;
  }
  return (
    <>
      <ButtonVariant style={styles}>{children}</ButtonVariant>
    </>
  );
};

const BtnWrapper = styled.button`
  font-family: "Roboto", san-serif;
  border-radius: var(--borderRadius);
  font-size: var(--fontSize);
  padding: var(--padding);
  border: none;
`;

//using Composition. with the Variant applied
const FillBtn = styled(BtnWrapper)`
  background: ${COLORS.primary};
`;
const OutlineBtn = styled(BtnWrapper)`
  background: ${COLORS.transparentGray15};
`;
const GhostBtn = styled(BtnWrapper)``;

export default Button;
