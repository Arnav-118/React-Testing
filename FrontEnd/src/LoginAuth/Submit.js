import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import axios from 'axios';
import App from '../App';

const invalidInput = function(err)
{
    document.getElementById("authFail").innerHTML = "Invalid Username or Password :(";
}

const showUserDetails = function(res)
{
    // window.location.href = "/dashboard";
    return(
          <div>
              {/* <h1>WELCOME!</h1>
              <h1>Name: {res.data[0].name}</h1>
              <br></br>
              <h3>Email: {res.data[0].email}</h3>
              <h3>Phone: {res.data[0].phone}</h3>
              <h3>Company: {res.data[0].company.name}</h3>
              <h4>Address: {res.data[0].address.suite}, {res.data[0].address.street}, {res.data[0].address.city} - {res.data[0].address.zipcode}</h4> */}
          </div>
      );
}

const authLogin = function()
{
    if ((document.getElementById("pwd").value !== "admin") || ((document.getElementById("user").value>"8") && (document.getElementById("user").value<"1")))
    {
        invalidInput();
        return 1;
    }
    const userId = document.getElementById("user").value;
    axios({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/users?id=' + userId,
    })
    .then(res => showUserDetails(res))
    .catch(err => invalidInput(err))
}

const submit = function()
{
    return(
        <div className="submitBtn">
            <button className="loginBtn" onClick={authLogin}>LOGIN</button>
        </div>
    );
}

export default submit;
export const UserDetails = showUserDetails;