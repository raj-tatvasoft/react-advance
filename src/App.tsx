import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { RouteArr } from "./Routes";
import Button from "@mui/material/Button";
import { CssBaseline, Switch } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./themeConst";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Switch
          onChange={(e) => {
            setIsDarkMode(!isDarkMode);
          }}
        />
        <CssBaseline />
        <Button variant="outlined">Hello world</Button>
        <Router>
          <div className="main-links">
            {RouteArr.map((x) => (
              <Link key={x.path} to={x.path}>
                {x.title} Demo
              </Link>
            ))}
          </div>
          <Routes>
            {RouteArr.map((x) => (
              <Route key={x.path} path={x.path} element={x.component} />
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
