import React from "react";
import "./Pokecard.css"

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


class Pokecard extends React.Component {  

  static defaultProps = [
    {
      id: 4,
      name: "Charmander",
      type: "fire",
      base_experience: 62
    },
    {
      id: 7,
      name: "Squirtle",
      type: "water",
      base_experience: 63
    },
    {
      id: 11,
      name: "Metapod",
      type: "bug",
      base_experience: 72
    },
    {
      id: 12,
      name: "Butterfree",
      type: "flying",
      base_experience: 178
    },
    {
      id: 25,
      name: "Pikachu",
      type: "electric",
      base_experience: 112
    },
    {
      id: 39,
      name: "JigglyPuff",
      type: "normal",
      base_experience: 95
    },
    {
      id: 94,
      name: "Gengar",
      type: "poison",
      base_experience: 225
    },
    {
      id: 133,
      name: "Eevee",
      type: "normal",
      base_experience: 65
    }
  ];

  render() {
    const { id, name, type, base_experience } = this.props;

    let imgSrc = `${POKE_API}${id}`
    
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