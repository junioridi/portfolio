import React from 'react';
import './login.css';

export default function Login() {

    return( 
        <div className="login-wrapper">
           <form>
               <label>
                   <p>Username</p>
                   <input type="text" />
               </label>
               <label>
                   <p>Password</p>
                   <input type="password" />
               </label>
               <button name="Login" type="submit" />
           </form>
        </div>
    );

}
