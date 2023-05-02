import "./App.css";
import {
  ThemeProvider,
  createTheme,
  Stack,
  responsiveFontSizes,
  Divider,
} from "@mui/material";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gallery from "../src/components/Gallery";
import About from "./components/About";

function App() {
  let theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
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
        <Stack>
          <DrawerAppBar />
          <Hero />
          <Projects />
          <Gallery />
          <About />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
