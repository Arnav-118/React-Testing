import React, { Component } from 'react';
import App from './App.js';
import './App.css';
import {Route} from 'react-router-dom';
import Dashboard from './Dashboard.js';

class Router extends Component 
{
  state = {
    userId: 1,
    password: 1
  }

  changeState = () => {
    this.setState({
        userId: document.getElementById("user").value
    })
}


  render ()
  {
    return (
    <div>
      <Route exact path="/"><App state={this.state} changeState={this.changeState}></App></Route>
      <Route exact path="/dashboard"><Dashboard state={this.state} changeState={this.changeState} serverResponse={this.serverResponse}></Dashboard></Route>
    </div>
  );
  }
}

export default Router;
