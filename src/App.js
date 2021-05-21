import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Home/Navbar';
import Inbox from './Components/Inbox/Inbox';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home';

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>)}
