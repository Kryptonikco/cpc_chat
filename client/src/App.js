import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import Home from "./scenes/Home";
import Rooms from "./scenes/Rooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/username/:username" component={Rooms} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
