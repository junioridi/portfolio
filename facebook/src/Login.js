import React from 'react';
import "./Login.css";
import { useState } from 'react';
import { actionTypes } from "./Reducer.js";
import { useStateValue } from "./StateProvider";
import {auth, provider} from "./firebase";
 
export default function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => alert(error.message));
        return false;
    }
    
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        dispatch({
            type: actionTypes.SET_USER, 
            user: userName
        });
        return(false);
    }
    
    return (

        <div className="login">
            <div className="login-logo">
            
            </div>
            <div className="login-logo-name">
            </div>
            <form>
                <input type="text" placeholder="Username" onChange={ (e) => setUserName(e.target.value) } />
                <input type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) }/>
                <button type="submit" onClink={handleSubmit}>Sign In</button>
                <button type="submit" onClick={signIn}>Sign In with Google</button>
            </form>
        </div>

    );
}
