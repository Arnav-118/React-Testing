import React from 'react';
import axios from 'axios';

var userId;

const Submit = function(props)
{
    function authLogin()
    {
        props.changeState();
        setTimeout(100);
        userId = props.state.userId;
        window.location.href = '/dashboard';
        // var tempVar = 1;
        // axios({
        //     method: 'get',
        //     url: 'https://jsonplaceholder.typicode.com/users/'
        // })
        // .then(res => checkAuth(res))
        // .catch(err => console.log(err));

        // function checkAuth(res) {
        //     for (let i=0; i<10; i++)
        //     {
        //         if ((props.state.userId === res.data[i].username) && (document.getElementById("password").value === "admin"))
        //         {
        //             tempVar = 0;
        //             props.changeState();
        //             window.location.href = "/dashboard";
        //         }
        //         if ((i===9) && (tempVar==1))
        //         {
        //             document.getElementById("invalidInput").innerHTML = "Invalid username or password :(";
        //             console.log(props.state.userId);
        //             console.log(document.getElementById("password").value);
        //         }
        //     }
        // }

    }
    return(
            <button className="submit-btn" onClick={authLogin}>LOGIN</button>
    );
    
}

export default Submit;
export { userId };










