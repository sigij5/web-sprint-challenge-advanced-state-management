import React, { Component } from "react";
import { NavLink, Route } from 'react-router-dom'

import "./App.css";

import { getSmurfs } from '../actions/smurfActions'
import SmurfsList from "./SmurfsList";
import { smurfsReducer } from "../reducers/smurfsReducer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink className='title' to='/'><h1>Welcome to Smurf Village</h1></NavLink>
        </header>
        <Route exact path='/'>
          <SmurfsList />
        </Route>

        {/* <Route exact path='/'{}>

    </Route> */}
      </div>
    );
  }
}

export default App;
