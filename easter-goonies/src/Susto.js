import React from 'react';
import "./Susto.css";
import susto1 from "./images/susto1.jpg";
import susto2 from "./images/susto2.jpg";
import susto3 from "./images/susto3.jpg";
import susto4 from "./images/susto4.jpg";

import grito1 from "./audio/susto1.wav";
import grito2 from "./audio/susto2.wav";
import grito3 from "./audio/susto3.wav";
import grito4 from "./audio/susto4.wav";


import ReactAudioPlayer from 'react-audio-player';
//import Player from "./Player.js";
import useSound from "use-sound";
import { useEffect } from 'react';

export default function Susto({number}) {

    var susto = susto1; 
    switch( number)     {
        case "1":
            susto = susto1;
            break;
        case "2":
            susto = susto2;
            break;
        case "3":
            susto = susto3;
            break;
        case "4":
            susto = susto4;
            break;
        default:
            susto = susto1;
            break;
    }

    var showing = false;
    const [play] = useSound(grito1);
    useEffect(  ()  => {
        play();
    }, [] );

    return (

        <div style={{backgroundImage:`url(${susto}`}} className="susto" onMouseEnter={play} onMouseLeave={play}>
             <audio autoPlay>
                <source src={`${grito1}`} type="audio/ogg" />
             </audio> 
        </div>

    );
}
