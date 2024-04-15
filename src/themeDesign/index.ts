import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { palette } from './Components/palette';
import typography from "./Components/typography";
import { appColors } from "./Components/appColors";

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          // background: `linear-gradient(90deg, #F2EFFF, #F2EFFF, #F2EFFF,#D6CBFF)`,
          color: appColors.white,
          borderRadius: "0px 100px 0px 0px",
          borderRight: "5px solid #D6CBFF",
          background: "#281D52",
          // fontSize: "12px"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: appColors.white 
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          
        }
      }
    },
    
  },
});
export default theme;