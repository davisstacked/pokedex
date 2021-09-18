import React from "react";

import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// used with POKE_API - each ID needs to be three digits so will conditionally add zeros to the front of numbers to achieve this. 
let padToThree = number => number <= 999 ? `00${number}`.slice(-3) : number;


class Pokecard extends React.Component {  

  render() {
    const { id, name, type, base_experience } = this.props;

    let threeId = padToThree(id);

    let imgSrc = `${POKE_API}${threeId}.png`
    
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-img">
          <img
            src={imgSrc}
            alt="pokemon"
          />
        </div>
        <h3 className="Pokecard-data">Type: {type}</h3>
        <h3 className="Pokecard-data">EXP: {base_experience}</h3>
      </div>
    )
  }
}

export default Pokecard;