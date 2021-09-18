import React, { Component } from 'react';
import Pokecard from "./Pokecard";

import "./Pokedex.css"

export class Pokedex extends Component {

  render() {

    return (
      <div className="Pokedex">
        <p>Total Experience: {this.props.exp}</p>
        <p>{this.props.isWinner}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
              />
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default Pokedex;

