import React from "react";
import "./MainMenu.css";
import {Link} from "react-router-dom";


function MainMenu() {
    return (
        <div className="main-menu">
            <h1>Escolha o desafio</h1>
            <ul>
                <li className="main-menu__item">  
                    <Link to="/roletrando">Roletrando</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/porta">Porta</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/calc">Calculadora</Link>
                </li>
            </ul>
        </div>    
    )        
}


export default MainMenu;
