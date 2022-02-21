import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Page } from "./Interfaces";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import "./scss/style.scss";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.home);

  return (
    <Router>
      <div className="app" style={{ height: "100vh" }}>
        <Nav currentPage={currentPage} />
        <Route
          path="/about"
          render={(props) => (
            <About
              {...props}
              setCurrentPage={(page: Page) => setCurrentPage(page)}
            />
          )}
          //component={About}
        />
        <Route
          path="/projects"
          render={(props) => (
            <Projects
              {...props}
              setCurrentPage={(page: Page) => setCurrentPage(page)}
            />
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              setCurrentPage={(page: Page) => setCurrentPage(page)}
            />
          )}
          exact
        />
      </div>
    </Router>
  );
}

export default App;
