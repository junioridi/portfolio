import React from 'react';
import "./Roletrando.css";
import {useState, useEffect} from "react";
import {useStateValue} from "./StateProvider.js";
import roletrando from "./images/roletrando.png";
import {Link, Redirect} from "react-router-dom";

export default function Roletrando({frase}) {


    const[posts, setPosts] = useState([]);
    const[input, setInput] = useState([""]);
    const[letras, setLetras] = useState([""]);
    const[dica, setDica] = useState(["Tem na cozinha. Você tem 10 letras"]);
   
    
    useEffect( () => {

        if( input !== "" )
        {
            
            if( letras.length <= 10 )
            {
                if(!letras.includes(input?.toString().toUpperCase()))
                {
                    
                    setLetras((letras+input).toUpperCase());
                    setDica(`Tem na cozinha. Você tem ${(10 - (letras+input).length).toString()} letras`);                
                }

            }  
          
            setInput("");
        }

    }, [input]);
    

    const verifyFrase = () => {

             var result = null;   

             var count = 0;
             frase.split('').map((char, index) => {
                 if( letras.length == 10 && !letras.includes(char) ){
                     result = "/susto2";
                 }
                 else if( letras.includes(char) )
                 {
                     count++;
                 }
             });

             if( count == frase.length )
             {
                result = "/pista1";
             }

             return result;
    }

    const decorateRoletrando = (frase, letras) => {
        return frase.split('').map((char, index) => (
            <>
            {   letras.includes(char) && 
                <div className="roletrando-letra">{char}</div>
            }
            {   !letras.includes(char) && 
                <div className="roletrando-letra-oculta">{char}</div>
            }                
            </>
        ))
    };

    const  redirect = verifyFrase();  

    if( redirect )
    {
        return ( 
            <Redirect to={redirect}/>
        )
    }
    
    return (

        <div style={{backgroundImage:`url(${roletrando}`}} className="roletrando">
            <div className="guess">
                <p>{letras}</p>
            </div>
        
            <div className="roletrando-wrapper">
                {decorateRoletrando(frase, letras)}
            </div>

            <div className="roletrando__input">
                <input autoFocus placeholder={dica} value={input} type="text" onChange={(e) => setInput(e.target.value)} />
            </div>        
        </div>

    );
}
