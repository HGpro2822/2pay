import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { appColors } from "../../../themeDesign/Components/appColors";

import { useNavigate } from "react-router-dom";
import theme from "../../../themeDesign";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type MenuItem = {
  title: string;
  path?: string;
  newPage?: boolean;
  submenuOpen?: boolean;
  heading: string;
  mainMenu?: MainmenuItem[];
};
type MainmenuItem = {
  heading?: string;
  title: string;
  path: string;
  newPage?: boolean;
  open?: boolean;
  submenus?: SubmenuItem[];
};
type SubmenuItem = {
  heading?: string;
  title: string;
  path: string;
  newPage?: boolean;
  open?: boolean;
};
const menuList: MenuItem[] = [
  {
    title: "COMPANY",
    submenuOpen: false,
    heading: "COMPANY",
    mainMenu: [
      {
        title: "HOMEEE",
        path: "/home",
        submenus: [
          {
            title: "HOME",
            path: "/home",
          },
        ],
      },
      // {
      //   title: "FOLLOW US",
      //   path: "/home",
      //   submenus: [
      //     {
      //       title: "FOLLOW US",
      //       path: "/home",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   title: "TOKEN",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "TOKEfN",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "TOKEN",
  //           path: "/token",
  //         },
  //         {
  //           title: "TOKEN-ALLOCATION",
  //           path: "/token/allocation",
  //         },
  //         {
  //           title: "EXCHANGE PARTNERS",
  //           path: "/token/exchange-partners",
  //         },
  //         {
  //           title: "DOUMENTS",
  //           path: "/token/document",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "OUR PRODUCTS",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "OUR PRODUCTS",
  //       path: "/product",
  //       submenus: [
  //         {
  //           title: "E-WALLET AND DIGITAL FINANCE",
  //           path: "/product/e-walet",
  //         },
  //         {
  //           title: "MONEY TRANSFER",
  //           path: "/product/money-transfer",
  //         },
  //         {
  //           title: "CRYPTO WALLET",
  //           path: "/product/cripto-walet",
  //         },

  //         {
  //           title: " CRYPTO EXCHANGE",
  //           path: "/product/crypto-exchange",
  //         },
  //         // {
  //         //   title: "BEAUTY & SALON BOOKING SERVICE",
  //         //   path: "/product/beauty-salon",
  //         // },
  //         {
  //           title: "FREELANCER MARKETPLACE",
  //           path: "/product/Freelance",
  //         },
  //       ],
  //     },
  //     {
  //       title: "OUR PRODUCTS services",
  //       path: "/product",
  //       submenus: [
  //         {
  //           title: "PRCHARGE PLATFORM",
  //           path: "/product/recharge",
  //         },
  //         {
  //           title: "HOME SERVICES",
  //           path: "/product/home-services",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "SERVICES",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "SERVICES",
  //       path: "/services",
  //       submenus: [
  //         {
  //           title: "DIGITAL MARKETING  ",
  //           path: "/services/digital-marketing",
  //         },
  //         {
  //           title: "HIRE DEVELOPERS   ",
  //           path: "/services/hire-developer",
  //         },
  //         {
  //           title: "PAYMENT SOLUTIONS",
  //           path: "/services/payment-solution",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "EARNING",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "EARNING",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "INVESTMENT",
  //           path: "/earning/investment",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "BUSINESS",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "BUSINESS",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "About Us",
  //           path: "/home/aboutus",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "PERSONAL",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "PERSONAL",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "About Us",
  //           path: "/home/aboutus",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "PRICE PARTNERS",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "PRICE",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "About Us",
  //           path: "/home/aboutus",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "BUY TOKEN",
  //   submenuOpen: false,
  //   heading: "HOME",
  //   mainMenu: [
  //     {
  //       title: "BUY TUPAY",
  //       path: "/home",
  //       submenus: [
  //         {
  //           title: "About Us",
  //           path: "/home/aboutus",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const SecondSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = useState<MenuItem | null>(null);
  const [currentDrawer, setCurrentDrawer] = useState(false);
  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuItem: MenuItem
  ) => {
    const updatedMenuList = menuList.map((item) => {
      if (item.title === menuItem.title) {
        item.submenuOpen = !item.submenuOpen;
      } else {
        item.submenuOpen = false;
      }
      return item;
    });
    // setDrawerOpen(!menuItem.submenuOpen);
    setAnchorEl(event.currentTarget);
    // setCurrentMenu(menuItem);
    setCurrentDrawer(true);
    setDrawerOpen(true);
    event.stopPropagation();
  };

  const handleOpenMenu1 = (
    event: React.MouseEvent<HTMLButtonElement>,
    menuItem: MenuItem
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuItem);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
    setCurrentDrawer(false);
  };

  const handleMainMenuItemClick = (pl: MainmenuItem) => {
    if (pl.submenus && pl.submenus.length > 0) {
    } else if (pl.path) {
      navigate(pl.path);
      handleCloseDrawer();
    }
    handleCloseMenu();
  };

  // useEffect(() => {
  //   const closeDrawerOnOutsideClick = (event: MouseEvent) => {
  //     if (
  //       event.target instanceof HTMLElement &&
  //       !event.target.closest("#drawer-container") &&
  //       drawerOpen
  //     ) {
  //       setDrawerOpen(false);
  //     }
  //   };

  //   document.body.addEventListener("click", closeDrawerOnOutsideClick);

  //   // return () => {
  //   //   document.body.removeEventListener("click", closeDrawerOnOutsideClick);
  //   // };
  // }, [drawerOpen]);

  return (
    <Box>
      {isMobile ? (
        <AppBar position="fixed">
          <Toolbar
            sx={{
              backgroundColor: "#F2EFFF",
              height: "100%",
              width: "100%",
              pt: 4,
            }}
          >
            <Grid>
              <Grid
                container
                width={"100%"}
                sx={{ backgroundColor: "#F2EFFF" }}
                alignContent="center"
                justifyContent="space-between"
                // px={3}
                // position="fixed"
              >
                <Grid
                  item
                  xs={6}
                  md={6}
                  sm={6}
                  justifyContent="left"
                  alignContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <IconButton onClick={handleOpenDrawer}>
                    <MenuIcon
                      sx={{
                        justifyContent: "center",
                        fontSize: "42px",
                        color: appColors.default[100],
                      }}
                    />
                  </IconButton>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={6}
                  sm={6}
                  justifyContent="left"
                  alignContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Grid container justifyContent="right" alignContent="flex">
                    <Grid item>
                      {/* <img
                        src={logo}
                        style={{ height: "50px", width: "50px" }}
                        alt="logo"
                      /> */}
                    </Grid>
                  </Grid>
                  <Grid item sx={{ mt: "6px" }}>
                    <Typography
                      sx={{
                        fontSize: 19,
                        color: appColors.black[100],
                        fontWeight: 900,
                      }}
                    >
                      TUPAY
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: "15px" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "13px",
                        color: appColors.black[100],
                        // ml: "-20px",
                      }}
                    >
                      CHAIN
                    </Typography>
                  </Grid>
                </Grid>

                {/* <Grid item xs={6} md={6} sm={6}>
                  <Grid container justifyContent="right" alignContent="flex">
                    <Grid item>
                      <img
                        src={logo}
                        style={{ height: "50px", width: "50px" }}
                      />
                    </Grid>

                    <Grid item sx={{ mt: "6px" }}>
                      <Typography
                        sx={{
                          fontSize: 19,
                          color: appColors.black[100],
                          fontWeight: 900,
                        }}
                      >
                        TUPAY
                      </Typography>
                    </Grid>
                    <Grid item sx={{ mt: "15px" }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "13px",
                          color: appColors.black[100],
                          ml: "-20px",
                        }}
                      >
                        CHAIN
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid> */}
              </Grid>
              <>
                {/* {drawerOpen && (
                  <IconButton
                    onClick={handleCloseDrawer}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "250px",
                      zIndex: 1999,
                      border: 2,
                      borderColor: "#D6CBFF",
                      backgroundColor: "#281D52",
                    }}
                  >
                    <CloseIcon
                      sx={{
                        justifyContent: "center",
                        fontSize: "42px",
                        color: appColors.white,
                      }}
                    />
                  </IconButton>
                )} */}

                <Drawer open={drawerOpen}>
                  <CloseIcon
                    onClick={handleCloseDrawer}
                    sx={{
                      justifyContent: "center",
                      fontSize: "50px",
                      color: appColors.white,
                      paddingLeft: 2,
                      paddingTop: 2,
                    }}
                  />

                  <List>
                    {menuList.map((menuItem, index) => (
                      <React.Fragment key={index}>
                        <ListItemButton
                          sx={{ height: "48px" }}
                          onClick={(event) => handleOpenMenu(event, menuItem)}
                        >
                          <ListItemText>{menuItem.title}</ListItemText>
                          {menuItem.mainMenu &&
                            (menuItem.mainMenu.length > 0 ? (
                              <ArrowDropDownIcon
                                style={{ fontSize: 40, paddingLeft: "1px" }}
                              />
                            ) : (
                              <ArrowDropUpIcon
                                style={{ fontSize: 40, paddingLeft: "1px" }}
                              />
                            ))}
                        </ListItemButton>
                        <Divider
                          variant="middle"
                          sx={{ backgroundColor: "white" }}
                        />
                        {menuItem.submenuOpen && menuItem.mainMenu && (
                          <Box>
                            {menuItem.mainMenu.map((mainMenuItem, index) => (
                              <List key={index}>
                                {mainMenuItem.submenus?.map(
                                  (submenuItem, subIndex) => (
                                    <ListItemButton
                                      key={subIndex}
                                      onClick={() =>
                                        handleMainMenuItemClick(submenuItem)
                                      }
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontSize: "1.5rem",
                                        fontWeight: 600,
                                        fontFamily: "Montserrat",
                                        pl: 4,
                                        height: "100%",
                                      }}
                                    >
                                      <Typography
                                        sx={{ color: appColors.white }}
                                      >
                                        {submenuItem.title}
                                      </Typography>
                                    </ListItemButton>
                                  )
                                )}
                              </List>
                            ))}
                          </Box>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Drawer>
              </>
            </Grid>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed">
          <Toolbar sx={{ backgroundColor: "#F2EFFF" }}>
            <Grid
              container
              width={"100%"}
              sx={{ backgroundColor: "#F2EFFF" }}
              alignContent="flex"
              justifyContent="space-between"
              px={3}
            >
              <Grid item lg={3}>
                <Grid container justifyContent="left" alignContent="flex">
                  <Grid item>
                    {/* <img
                      src={logo}
                      style={{ height: "75px", width: "75px" }}
                      alt="logo"
                    /> */}
                  </Grid>

                  <Grid item sx={{ mt: "13px" }}>
                    <Typography
                      variant="h4"
                      sx={{ color: appColors.black[100], ml: 1 }}
                    >
                      TUPAY
                    </Typography>
                  </Grid>
                  <Grid item sx={{ mt: "35px" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "15px",
                        color: appColors.black[100],
                        ml: "-20px",
                      }}
                    >
                      CHAIN
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={9} container justifyContent="right">
                {menuList.map((menuItem) => (
                  <Button
                    key={menuItem.title}
                    onClick={(event) => handleOpenMenu1(event, menuItem)}
                    id="demo-positioned-button"
                    aria-controls={
                      anchorEl ? "demo-positioned-menu" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? "true" : undefined}
                    sx={{
                      fontSize: "17px",
                      fontWeight: 600,
                      color: appColors.black[100],
                    }}
                  >
                    {menuItem.title}
                    {menuItem.mainMenu &&
                      (menuItem.mainMenu.length > 0 ? (
                        currentMenu === menuItem && anchorEl ? (
                          <ArrowDropUpIcon
                            style={{ fontSize: 40, paddingLeft: "1px" }}
                          />
                        ) : (
                          <ArrowDropDownIcon
                            style={{ fontSize: 40, paddingLeft: "1px" }}
                          />
                        )
                      ) : null)}
                  </Button>
                ))}

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      borderRadius: 8,
                      background: `linear-gradient(90deg, #F2EFFF, #F2EFFF, #F2EFFF,#D6CBFF)`,
                    },
                  }}
                >
                  {currentMenu && (
                    <Box minHeight={400} minWidth={1000}>
                      <Grid container>
                        {currentMenu.mainMenu?.map((mainMenuItem) => (
                          <Grid item key={mainMenuItem.title}>
                            <Box>
                              {mainMenuItem.submenus?.map((submenuItem) => (
                                <>
                                  <MenuItem
                                    key={submenuItem.title}
                                    onClick={() =>
                                      handleMainMenuItemClick(submenuItem)
                                    }
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      fontSize: "1.1rem",
                                      fontWeight: 600,
                                      fontFamily: "Montserrat",
                                      py: 1,
                                    }}
                                  >
                                    <span>{submenuItem.title}</span>
                                    <ArrowRightIcon
                                      style={{
                                        fontSize: 40,
                                        paddingLeft: "1px",
                                      }}
                                    />
                                  </MenuItem>
                                </>
                              ))}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Menu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};

export default React.memo(SecondSection);
