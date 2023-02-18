import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ContextProvider from "./context/ContextProvider";
import AppRouter from "./AppRouter";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <AppRouter />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextProvider>
  );
}

export default App;
