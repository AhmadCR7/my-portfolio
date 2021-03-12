import React from "react";
import About from "./pages/About/About";
import "./App.css";
import NavBar from "./components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
