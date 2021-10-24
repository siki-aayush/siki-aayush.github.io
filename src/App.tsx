import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import Home from "./components/Home";

import "./scss/style.scss";

function App() {
    return (
        <Router>
            <div className="app" style={{ height: "100vh" }}>
                <Nav />
                <Route path="/about" render={() => <div>Hello</div>} />
                <Route path="/projects" render={() => <div>projects</div>} />
                <Route path="/" component={Home} exact />
            </div>
        </Router>
    );
}

export default App;
