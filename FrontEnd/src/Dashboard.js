import React, { useState } from 'react';
import './App.css';
import axios from 'axios'; //install axios using npm!
import ReactDOM from 'react-dom';
import { userId } from './LoginAuth/Submit';
import { useHistory } from 'react-router-dom';

function Dashboard(props)
{
    const tempVar = 1 //Using this to prioritise tasks in setUserData
    const history = useHistory();
    const [name, setName] = useState("Guest");
    const[userName, setUserName] = useState("Guest#1823");
    function setUserData(res)
    {
        setName(res.data[userId-1].name)
        setUserName(res.data[userId-1].username)
        tempVar = 1;
    }
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/'
    })
    .then(res => setUserData(res))
    .catch(err => console.log(err));

    if (userId === undefined)
    {
        history.push("/")
    }
    

    return(
        <div className="userDetails" id="Dashboard">
            <h1>Let's see... <br />
                Hi there {name}!</h1>
            <h3>Your username is {userName}</h3>
        </div>
    )
}


export default Dashboard;