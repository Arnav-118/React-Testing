import React, { useState } from "react";
import '../App.css';
import './AppLeft.css';
import Submit from "../LoginAuth/Submit";
import Dashboard from "../Dashboard";

function AppLeft(props)
{
  const [loginError, setLoginError] = useState()
  function handleLogin()
  {
    const credentialsNotCorrect = document.getElementById("password") != "admin"
    if (credentialsNotCorrect)
    {
      setLoginError("Please enter a correct username and password!")
    }
  }
    return(
        <div className="appLeft">
        <div className="loginSide">
          <div className="loginBox">
            <p className="pageDescription">LOGO or PAGE<br />Description</p>
            <p>Please login to continue</p>
            <br />
            <input id="user" className="inputBox" type="text" placeholder="Username" onChange={props.changeState}/>
            <p></p>
            <input id="password" className="inputBox" type="password" placeholder="Password" />
            <p></p>
            <Submit handleLogin={handleLogin} state={props.state} changeState={props.changeState}/><br /><br />
            <p class="error">{loginError}</p>
            <input type="checkbox" />
            <label for="submitbtn" className="rememberMe">Remember me</label>
            <label for="submitbtn" className="forgotPwd">Forgot Password?</label>
            <p id="invalidInput" />
            <p className="footer">Feel free to contact us at <a href="mailto:info@geeksourceit.com">info@geeksourceit.com</a></p>
          </div>
        </div>
        {props.children}
        </div>
    );
}

export default AppLeft;