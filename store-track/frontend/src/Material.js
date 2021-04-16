import React from "react";   
import dbMaterial from "./dbMaterial.js";
import { Link, useHistory, useParams }from "react-router-dom";
import "./Material.css";

function Material() {

    const {id} = useParams();

    return(
        <div className="material">
            { dbMaterial.filter((item) => item.id == id ).map( (mat, index) => (
            <>
                <div className="material__field">
                    <label>Nome</label>
                    <input type="text" value={mat.nome} />
                </div>
                <div className="material__field">
                    <label>Grupo</label>
                    <input type="text" value={mat.grupo} />
                </div>
                <div className="material__field">
                    <label>Saldo</label>
                    <input type="text" value={mat.saldo} />
                </div>
                <div className="material__buttons">
                    <button type="Submit">
                        Cancelar
                    </button>
                    <button type="Submit">
                        Salvar
                    </button>
                </div>
            </>
          ))
        }
        </div>
    )
}


export default Material;
