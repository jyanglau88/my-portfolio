import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//pages
import About from "./pages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch"; //404 Page
import Portfolio from "./pages/Portfolio"

//components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Connect" component={Connect} />
        <Route exact path="/Portfolio" component={Portfolio} />
        
        {/* <Route exact path="/PlaceHolder/:id" component={PlaceHolder} />
         */}
         
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
