import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

var userId;

const Submit = function(props)
{
    const history = useHistory();
    function authLogin()
    {
        props.changeState();
        setTimeout(100);
        userId = props.state.userId;
        history.push("/dashboard");
        props.handleLogin();
    }
    return(
            <button className="submit-btn" onClick={authLogin}>LOGIN</button>
    );
    
}

export default Submit;
export { userId };










