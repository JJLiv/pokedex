import React from "react";
import Pokecard from "./Pokecard";


const Pokedex = (props) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            <div>
                {props.map(p => (
                    <Pokecard key={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                ))}
            </div>
        </div>
    )
};


export default Pokedex;