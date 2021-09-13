import React, { Component } from 'react';
import './App.css';
import AppRight from './AppRight/AppRight';
import AppLeft from './AppLeft/AppLeft';

function App(props){
    return(
    <div className="App">
      <AppLeft state={props.state} changeState={props.changeState}>
        <h5>UserID: {props.state.userId}</h5>
      </AppLeft>
      <AppRight></AppRight>
    </div>
    );
    }



export default App;
