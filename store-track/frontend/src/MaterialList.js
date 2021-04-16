import React from "react";   
import dbMaterial from "./dbMaterial.js";
import { Link }from "react-router-dom";
import "./MaterialList.css";

function MaterialList() {

    const handleClick = (e) => {
        //alert("Handled Click");
    }
    
    return(
        <div className="material-list">
        { dbMaterial.map( (mat, index) => (
            <div className="material-list__item" onClick={(e)=>handleClick(e)}>
                <Link to={`/material/${mat.id}`}>
                    <p>{mat.nome}</p>
                </Link>
            </div>
          ))
        }
        </div>
    )
}


export default MaterialList;
