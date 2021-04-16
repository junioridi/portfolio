import React from 'react';
import './login.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login( {setToken})  {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const sendLogin = async e => {
        e.preventDefault();
        const response = await fetch( "http://localhost:8080/login", {
            method:"POST",
            headers: { "Content-Type":  "application/json"},
            body: JSON.stringify( { username, password } )
        }).then( (data) => { return data.json() } );
        //alert(JSON.stringify(response));   
        setToken(response);

    };      

    
    return(
        <div className="login-wrapper">
            <form>
                <label>
                    <p>Username</p>
        <input type="text" onChange={ e => setUsername(e.target.value) } />
                </label>
                <label>
                    <p>Password</p>
        <input type="password" onChange={ e => setPassword(e.target.value) } />
                </label>
    
        <button type="submit"onClick={ e => sendLogin(e) }>Login</button>

        </form>                
        
        </div>    
    )

}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
