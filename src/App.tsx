import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { RouteArr } from "./Routes";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
