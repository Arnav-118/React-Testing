import React, { Component } from 'react';
import './App.css';
import AppRight from './AppRight/AppRight';
import AppLeft from './AppLeft/AppLeft';

class App extends Component
{
  state = {
    userId: 1,
    password: 1
  }


  render(){
    return(
    <div className="App">
      <AppLeft></AppLeft>
      <AppRight></AppRight>
    </div>
    );
    }
    
  
}


export default App;
