import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";
import { palette } from "./palette";
import { appColors } from "./appColors";

export const typography: TypographyOptions = {
  fontFamily: "Inter",

  h1: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: "65px",
    lineHeight: 1.2,
  },
  h2: {
    color: palette.text.primary,
    fontSize: "58px",
    fontWeight: 900,
    letterSpacing: "0.4px",
    lineHeight: "77.45px",
  },
  h3: {
    color: palette.text.primary,
    fontSize: "20px",
    fontWeight: 900,
    lineHeight: "24.2px",
  },
  h4: {
    color: palette.text.primary,
    fontSize: "32px",
    fontWeight: 800,
    lineHeight: "38.73px",
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "1rem",
  },
  h6: {
    fontSize: "14px",
    color: palette.text.primary,
    fontWeight: 400,
    lineHeight: "12px",
  },
  button: {
    textTransform: "uppercase",
    fontWeight: 900,
  },
  body1: {
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: "12px",
    letterSpacing: "0.4px",
    lineHeight: "25px",
  },
  body2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "18px",
  },
};

export default typography;
