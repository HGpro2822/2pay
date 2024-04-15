import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Menu from "./Components/Menu";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <Box>
        <Grid
        sx={{ backgroundColor: "#F2EFFF" }}
        >
          <Menu />
        </Grid>
      </Box>

      {children}
    </>
  );
};

export default Header;
