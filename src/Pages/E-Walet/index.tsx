import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../themeDesign";
import ewbg1 from "../../Images/ewbg1.png";
import { appColors } from "../../themeDesign/Components/appColors";

export default function Index() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ backgroundColor: "#120118" }}>
      <Grid
        container
        justifyContent="space-between"
        alignContent="flex"
        px={isMobile ? 3 : 10}
        py={isMobile ? 5 : 10}
        style={{
          backgroundImage: `url(${ewbg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid item lg={7} md={7} xs={12} sm={12} pt={isMobile ? 10 : 15}>
          <Grid container justifyContent="left" alignContent="flex">
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? "43px" : "58px",
                  fontWeight: 900,
                  letterSpacing: "0.4px",
                  lineHeight: isMobile ? "42px" : "77.45px",
                  color: appColors.white,
                }}
              >
                Tupay Finance 
                <br />
                E-Wallet
              </Typography>
            </Grid>
            <Grid item lg={11} xs={12} py={4}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.4px",
                  lineHeight: "32px",
                  color: appColors.white,
                }}
              >
                It’s a VISA-powered e-wallet that customer of any bank can use
                to r send money, shop anywhere, pay bills and much more. Tupay
                wallet also comes with a physical shopping card which can be
                used to shop on any website or retail stores. booking software
                for the tourist and hotel business of any kind.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
