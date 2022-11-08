import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import Router from "./routes/Router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A7029",
    },
    grey: {
      100: "#FEDE00",
      900: "#FEDE00",
    },
    background: {
      paper: "#DBE8D8",
    },
    text: {
      primary: "#0A7029",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
