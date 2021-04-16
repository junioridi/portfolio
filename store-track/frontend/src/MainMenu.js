import React from "react";
import "./MainMenu.css";
import {Link} from "react-router-dom";


function MainMenu() {
    return (
        <div className="main-menu">
            <ul>
                <li className="main-menu__item">  
                    <Link to="/material-list">Material</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/entrada">Entrada</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/saida">Saída</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/inventario">Inventário</Link>
                </li>
                 <li className="main-menu__item">  
                    <Link to="/relatorio">Relatorio</Link>
                </li>
            </ul>
        </div>    
    )        
}


export default MainMenu;
