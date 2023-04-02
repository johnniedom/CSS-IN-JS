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
  try {
    if (variant === "fill") {
      ButtonVariant = FillBtn;
    }
    if (variant === "outline") {
      ButtonVariant = OutlineBtn;
    }
    if (variant === "ghost") {
      ButtonVariant = GhostBtn;
    }
  } catch (err) {
    console.error(err);
    console.error("Unrecognized Button variant:", variant);
    throw new Error(`Unrecognized Button variant: ${variant}`);
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
  outline: ${COLORS.primary};
`;

//using Composition. with the Variant applied
const FillBtn = styled(BtnWrapper)`
  background: ${COLORS.primary};
  color: ${COLORS.white};

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;
const OutlineBtn = styled(BtnWrapper)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }
  &:hover {
    outline: ${COLORS.primary};
    outline-offset: 2px;
  }
`;
const GhostBtn = styled(BtnWrapper)`
  color: ${COLORS.gray};

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
    outline-offset: 2px;
  }

  &:hover {
    background: ${COLORS.grey};
    outline-offset: 2px;
    color: ${COLORS.black};
  }
`;

export default Button;
