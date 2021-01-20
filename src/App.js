import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StartPage from "./components/StartPage";
import MoviesPage from "./components/MoviesPage"
import "./App.css"
export default function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <nav>
            <h1>WELLCOME TO MOVIE´S WORLD</h1>
          </nav>
          <Switch>
          <Route path="/MoviePage">
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


