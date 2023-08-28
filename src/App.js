import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import store from "./store";
import history from "./history";
import Layouts from "./layouts";
import { THEME_CONFIG } from "./configs/AppConfig";
import "./lang";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import mockServer from "./mock";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

const environment = process.env.REACT_APP_BASE_URL;

if (environment) {
  // mockServer({ environment });
}
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
     <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint="styles-insertion-point"
          >
            <Layouts />
          </ThemeSwitcherProvider>
        </BrowserRouter>
      </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
