import { appColors } from "./appColors";
import { PaletteMode } from "@mui/material";

export const palette = {
  mode: "light" as PaletteMode,
  primary: {
    main: appColors.black[100],
    light: appColors.green[65],
    dark: appColors.green[95],
    contrastText: appColors.white,
  },
  secondary: {
    main: appColors.green[50],
    light: appColors.black[50],
    dark: appColors.green[70],
    contrastText: appColors.purple[15],
  },
  error: {
    main: appColors.red[80],
    // light: appColors.defultThemColor[65],
    // dark: appColors.defultThemColor[67],
    contrastText: appColors.white,
  },
  warning: {
    main: appColors.yellow[40],
    // light: appColors.defultThemColor[55],
    // dark: appColors.defultThemColor[57],
    // contrastText: appColors.defultThemColor[59],
  },
  info: {
    main: appColors.purple[60],
    // light: appColors.defultThemColor[45],
    // dark: appColors.defultThemColor[47],
    // contrastText: appColors.defultThemColor[49],
  },
  success: {
    main: appColors.purple[55],
    light: appColors.purple[45],
    dark: appColors.purple[85],
    contrastText: appColors.white,
  },
  text: {
    primary: appColors.black[100],
    secondary: appColors.black[90],
    disabled: appColors.black[40],
  },
};

export default palette;
