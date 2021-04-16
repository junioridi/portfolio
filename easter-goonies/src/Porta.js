import React from 'react';
import "./Porta.css";
import {useState, useEffect} from "react";
import {useStateValue} from "./StateProvider.js";
import porta from "./images/porta.png";
import { Link, Redirect } from "react-router-dom";

export default function Porta({number,selected}) {

    var redirect = "/susto2";
    if( number == selected ) 
    {
        redirect = "/pista3";
    }

    const[posts, setPosts] = useState([]);   


    return (

        <div style={{backgroundImage:`url(${porta}`}} className="porta">
        <Link to={redirect} className="porta__link">  
                <p>{number}</p>
        </Link>
        </div>

);
}
