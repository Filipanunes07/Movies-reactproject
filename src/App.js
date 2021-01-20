import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StartPage from "./components/StartPage";
import MoviesPage from "./components/CountryList"
import "./App.css"
export default function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <nav>
            <h1>WELCOME TO THE WORLD</h1>
            <br></br>
            <p>by Filipa Nunes</p>
          </nav>
          <Switch>
          <Route path="/CountryList">
              <MoviesPage />
            </Route>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


