import React from "react";
import '../App.css';
import './AppLeft.css';

function AppLeft()
{
    return(
        <div class="appLeft">
        <div class="loginSide">
          <div class="loginBox">
            <p class="pageDescription">LOGO or PAGE<br />Description</p>
            <p>Please login to continue</p>
            <br />
            <input id="user" class="inputBox" type="text" placeholder="Username" />
            <p></p>
            <input id="password" class="inputBox" type="password" placeholder="Password" />
            <p></p>
            <button name="submitbtn" class="submit-btn" onclick="showUserDetails()">Login</button><br /><br />
            <input type="checkbox" />
            <label for="submitbtn" class="rememberMe">Remember me</label>
            <label for="submitbtn" class="forgotPwd">Forgot Password?</label>
            <p class="footer">Feel free to contact us at <a href="mailto:info@geeksourceit.com">info@geeksourceit.com</a></p>
          </div>
        </div>
        </div>
    );
}

export default AppLeft;