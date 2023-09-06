import React from "react";
import About from "./pages/About/About";
import "./App.css";
import NavBar from "./components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/project" component={Projects} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
