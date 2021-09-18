import React from "react";
import "./Pokecard.css"

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


class Pokecard extends React.Component {  

  render() {
    const { id, name, type, base_experience } = this.props;

    let imgSrc = `${POKE_API}${id}.png`
    
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img
          src={imgSrc}
          alt="pokemon"
        />
        <h3>Type: {type}</h3>
        <h3>EXP: {base_experience}</h3>
      </div>
    )
  }
}

export default Pokecard;