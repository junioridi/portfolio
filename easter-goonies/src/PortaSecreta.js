import React from 'react';
import "./PortaSecreta.css";
import {useState, useEffect} from "react";
import {useStateValue} from "./StateProvider.js";
import parede from "./images/parede-branca.jpg";
import Porta from "./Porta.js";

export default function PortaSecreta({selected}) { 
    
    const[posts, setPosts] = useState([]);   
    return (

        <div style={{backgroundImage:`url(${parede}`}} className="porta-secreta">
            <div className="porta-secreta__wrapper">
                <Porta number="1" selected={selected}/>
                <Porta number="2" selected={selected}/>
                <Porta number="3" selected={selected}/>
            </div>
        </div>

    );
}
