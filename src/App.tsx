import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import "./scss/style.scss";

function App() {
    return (
        <Router>
            <div className="app" style={{ height: "100vh" }}>
                <Nav />
                <Route path="/about" render={About} />
                <Route path="/projects" render={Projects} />
                <Route path="/" component={Home} exact />
            </div>
        </Router>
    );
}

export default App;
