import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./themeDesign";
import { ThemeProvider } from "@mui/material";
import Header from "./Drawer/Layout/header";
import Footer from "./Drawer/Layout/footer";
import AppRoutes from "./Drawer/Routes";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header>
          <AppRoutes />
        </Header>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
