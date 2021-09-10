import React, { Component } from 'react';
import App from './App.js';
import './App.css';
import {Route} from 'react-router-dom';
import Dashboard from './Dashboard.js';

class Router extends Component 
{

  render ()
  {
    return (
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
    </div>
  );
  }
}

export default Router;
