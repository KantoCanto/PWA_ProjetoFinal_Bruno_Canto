import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import { useSelector } from "react-redux";
import themeConfigs from "./configs/theme.config";
import {ToastContainer} from "react-toastify"
import {CssBaseLine} from "@mui/material/CssBaseline"

const App = () => {
  const {themeMode} = useSelector((state) => state.themeMode);


  return (
    <ThemeProvider theme={themeConfigs.custom({mode: themeMode})}>
    {/* config toastify*/}
      <ToastContainer 
        position = "bottom-left"
        autClose= {3000}
        hideProgressBar = {false}
        newsOnTop = {false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
      />
      {/* mui reset css*/}
      <CssBaseLine />
    </ThemeProvider>
  );
}

export default App;
