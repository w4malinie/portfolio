import "./App.css";
import {
  ThemeProvider,
  createTheme,
  Stack,
  responsiveFontSizes,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import BinkyApp from "./pages/BinkyApp";

function App() {
  let theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#EF87C7",
      },
      secondary: {
        main: "#36ACBE",
      },
    },
    typography: {
      fontFamily: "Quattrocento Sans",
      fontSize: 20,
      h1: {
        fontFamily: "Quattrocento",
        fontSize: 86,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: "Quattrocento Sans",
        fontSize: 56,
        lineHeight: 1.2,
        fontWeight: "bold",
      },
      h3: {
        fontFamily: "Quattrocento",
        fontSize: 40,
        lineHeight: 1.2,
        fontWeight: "bold",
      },
      h4: {
        fontFamily: "Quattrocento Sans",
        fontSize: 36,
        fontWeight: "bold",
      },
      h5: {
        fontFamily: "Quattrocento Sans",
        fontSize: 30,
        fontWeight: "bold",
      },
      body2: {
        fontFamily: "Quattrocento Sans",
        fontSize: 20,
        lineHeight: 1.5,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/binky-app" element={<BinkyApp />}></Route>
          <Route path="/vinted-seearch"></Route>
          <Route path="/pawma"></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
