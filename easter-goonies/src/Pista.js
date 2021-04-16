import React from 'react';
import "./Pista.css";

import pista1 from "./images/pista1.jpg";
import pista2 from "./images/pista2.jpg";
import pista3 from "./images/pista3.jpg";


import ReactAudioPlayer from 'react-audio-player';
//import Player from "./Player.js";
import useSound from "use-sound";
import { useEffect } from 'react';

export default function Pista({number}) {

    var pista = pista1; 
    switch( number)     {
        case "1":
            pista = pista1;
            break;
        case "2":
            pista = pista2;
            break;
        case "3":
            pista = pista3;
            break;
        default:
            pista = pista1;
            break;
    }

    return (

        <div style={{backgroundImage:`url(${pista}`}} className="pista" >..
        </div>

    );
}
