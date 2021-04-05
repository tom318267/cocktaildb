import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Errorpage from "./components/Errorpage/Errorpage";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage";
import CocktailShow from "./components/CocktailShow/CocktailShow";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Errorpage>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/cocktail/:id" component={CocktailShow} />
          </Errorpage>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
