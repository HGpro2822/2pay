import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../themeDesign";
import ewbg1 from "../../Images/ewbg1.png";
import ew1 from "../../Images/ew1.jpeg";
import { appColors } from "../../themeDesign/Components/appColors";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "../../style.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { hover } from "@testing-library/user-event/dist/hover";

const Data1 = [
  { data: "SEND MONEY" },
  { data: "BUY TOKEN" },
  {
    data: "pay bills",
  },
  { data: "group pay" },
];
const Data = [
  {
    data: "25+",
    value: "Projects Delivered",
  },
  {
    data: "25+",
    value: "Years Of Experience",
  },
  {
    data: "25+",
    value: "Software Engineers",
  },
  {
    data: "25+",
    value: "Happy Clients",
  },
];

export default function Index() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ backgroundColor: "#120118" }}>
      {/* 1 */}
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
        <Grid item lg={7} md={7} xs={12} sm={12} pt={10}>
          <Grid container justifyContent="left" alignContent="flex">
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? "48px" : "58px",
                  fontWeight: 900,
                  letterSpacing: "0.4px",
                  lineHeight: isMobile ? "60px" : "77.45px",
                  color: appColors.default[40],
                }}
              >
                Tupay Finance
                <br />
                E-Wallet
              </Typography>
            </Grid>
            <Grid item lg={11} md={11} xs={12} sm={12} py={4}>
              <Typography
                sx={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: 400,
                  letterSpacing: "0.4px",
                  lineHeight: "32px",
                  color: appColors.default[40],
                  fontFamily: "Judson",
                  pb: 2,
                }}
              >
                It’s a VISA-powered e-wallet that customer of any bank can use
                to r send money, shop anywhere, pay bills and much more. Tupay
                wallet also comes with a physical shopping card which can be
                used to shop on any website or retail stores.
              </Typography>
              <Typography
                sx={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: 400,
                  letterSpacing: "0.4px",
                  lineHeight: "32px",
                  color: appColors.default[40],
                  fontFamily: "Judson",
                }}
              >
                We have an unshakable confidence that we will empower lives
                through inclusive, innovative and reliable fin-tech solutions.
                Our solutions will not be a privilege for few.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={5}
          md={5}
          pt={10}
          sx={{
            background: `url(${ew1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundClip: "border-box",
            opacity: "90%",
            position: " relative",
            animation: "backwards",
          }}
        />

        <Grid item lg={7} md={12} xs={12}>
          <Grid container justifyContent="space-between">
            {Data.map((data, index) => (
              <Grid
                item
                lg={5.75}
                md={5.7}
                sm={5.7}
                xs={12}
                my={2}
                sx={{ background: "#742DD98A", borderRadius: 2 }}
              >
                {" "}
                <Grid container p={1}>
                  <WorkspacePremiumIcon
                    style={{
                      color: "#dde809",
                      fontSize: 50,
                      animation: "moveupdown 1.5s infinite",
                    }}
                  />
                  <Grid item lg={9}>
                    <Typography
                      sx={{
                        color: appColors.default[40],
                        my: 1,
                        fontSize: isMobile ? "24px" : "32px",
                        fontFamily: "Inter",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      {data.data}
                    </Typography>
                    <Typography
                      sx={{
                        color: appColors.default[40],
                        fontSize: isMobile ? "18px" : "24px",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        my: 1,
                      }}
                    >
                      {" "}
                      {data.value}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item lg={8} md={12} xs={12} pt={3}>
          <Grid container justifyContent="space-between">
            {Data1.map((data, index) => (
              <Grid
                item
                lg={2.9}
                md={2.9}
                sm={2.9}
                xs={5.7}
                my={1}
                sx={{
                  background: "#AC05F0",
                  borderRadius: 1,
                  alignItems: "center",
                  border: "1px solid #AC05F0",
                  textAlign: "center",
                }}
              >
                {" "}
                <Button
                  sx={{
                    px: 3,
                    fontSize: isMobile ? "15px" : "18px",
                    fontWeight: 400,
                    color: "#F2EFFF",
                    fontFamily: "Outfit",
                    bgcolor: "#AC05F0",
                    border: "1px solid #AC05F0",
                  }}
                >
                  {data.data}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* 2 */}
      <Grid
        container
        justifyContent="space-between"
        alignContent="flex"
        px={isMobile ? 3 : 10}
        py={isMobile ? 5 : 10}
      >
        <Grid item lg={5}>
          <Typography
            sx={{
              fontSize: isMobile ? "42px" : "50px",
              fontWeight: 800,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? "60px" : "77.45px",
              backgroundImage:
                "linear-gradient(to right, #850BB7 15%, #D6CBFF 50%, #D6CBFF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <Typography
            sx={{
              fontSize: isMobile ? "45px" : "58px",
              fontWeight: 900,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? "60px" : "77.45px",
              backgroundImage:
                "linear-gradient(to right, #850BB7 10%,#D6CBFF 25%, #D6CBFF 50%, #D6CBFF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Your Trusted Digital Partner For An Ambitious
          </Typography>
        </Grid>
        <Grid item lg={11} ml={isMobile ? "10px" : "30px"} my={2}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: isMobile ? "17px" : "24px",
              fontWeight: 400,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? 1.15 : 1.75,
              color: appColors.default[40],
            }}
          >
            <li>
              To provide everyone with an equal chance to advance faster by
              opening up the money supply and service access. The merchants of
              Tupay are the Center of our operations.
            </li>
          </Typography>
        </Grid>
        <Grid item lg={11} ml={isMobile ? "10px" : "30px"} my={2}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: isMobile ? "17px" : "24px",
              fontWeight: 400,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? 1.15 : 1.75,
              color: appColors.default[40],
            }}
          >
            <li>
              It's inherent in both our DNA and our brand identity. We are aware
              that mill-ions of small businesses across the globe require a
              financing partner who can offer customized products that are
              tailored to their specific needs.
            </li>
          </Typography>
        </Grid>
        <Grid item lg={11} ml={isMobile ? "10px" : "30px"} my={2}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: isMobile ? "17px" : "24px",
              fontWeight: 400,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? 1.15 : 1.75,
              color: appColors.default[40],
            }}
          >
            <li>
              We set out to close this gap and support merchant partners'
              expansion. We now serve as a one-stop shop for fin-tech, providing
              millions of retailers with simple, secure financial solutions.
            </li>
          </Typography>
        </Grid>
      </Grid>
      {/* 3 */}
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
        <Grid item lg={5}>
          <Typography
            sx={{
              fontSize: isMobile ? "42px" : "50px",
              fontWeight: 800,
              letterSpacing: "0.4px",
              lineHeight: isMobile ? "60px" : "77.45px",
              backgroundImage:
                "linear-gradient(to right, #850BB7 15%, #D6CBFF 50%, #D6CBFF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Why
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
