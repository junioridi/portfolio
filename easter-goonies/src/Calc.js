import React from 'react';
import "./Calc.css";
import {useState, useEffect} from "react";
import {useStateValue} from "./StateProvider.js";
import matematica from "./images/matematica.jpg";
import {Link} from "react-router-dom";

export default function Calc({operacao, numero1, numero2, porta}) {

    var result = 0;
    if( operacao = "-" )
    {
        result = (numero1 - numero2).toString();
    }
    else if( operacao = "+" )
    {   
        result = (numero1 + numero2).toString();
    }  

    
    const decorateNumber = (number, port) => {
        return number.split('').map((letter, index) => (

            <>
            {   port && port == index && 
                <Link to="/pista2">
                <span className="calc__numero" style={{borderColor:`red`}}>
                        {letter}
                </span> 
                </Link>
            }        
            {   ( !port || port != index ) && <span className="calc__numero" style={{borderColor:`white`}}>
                        {letter}
                        </span> 
            }
            </>
        ))
    };

    const[posts, setPosts] = useState([]);   
    const[input, setInput] = useState([]);
    const[showPorta, setShowPorta] = useState([null]);

    
    useEffect( () => {
        if( result == input ) {
            setShowPorta(porta);
        }
        else
        {
            setShowPorta(null);
        }

    }, [input]);


    return (

        <div style={{backgroundImage:`url(${matematica}`}} className="calc">
            <div className="calc__top">
                {decorateNumber(numero1)}
            </div>
            <div className="calc__middle">
                {decorateNumber(operacao+numero2)}
            </div>
            {
            <div className="calc__bottom">
                {decorateNumber('=' + input, showPorta)}
            </div>
            }
            <div className="calc__resultado">
                <input placeholder="Digite o resultado" type="text" onChange={(e) => setInput(e.target.value)} />
                <button>Confirme</button>
            </div>        
        </div>

    );
}
