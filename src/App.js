import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

function App() {
    return (
        <div>
            <Pokedex props={Pokemon} />
        </div>
    );
};


export default App;