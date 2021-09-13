import React from 'react';
import './App.css';
import axios from 'axios'; //install axios using npm!
import ReactDOM from 'react-dom';
import { userId } from './LoginAuth/Submit';

function Dashboard(props)
{
    console.log(props.state)

    return(
        <div className="userDetails" id="Dashboard">
            <h1>Let's see... {props.state.userId}</h1>
            <h1>Did that work? {props.state.password}</h1>
        </div>
    )
}


export default Dashboard;