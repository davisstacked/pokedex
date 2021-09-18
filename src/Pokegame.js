import React, { Component } from "react";
import Pokedex from "./Pokedex";

import './Pokegame.css'

// once you've got this working, modify your Pokegame so that it also calculates the total experience for each hand of pokemon. It should pass this total to the Pokedex. 

// Next, have the Pokegame component determine which hand is the "winner," where the winning hand is the one with the higher total experience. Then modify the Pokedex component one more time so that it accepts a prop of isWinner. If the Pokedex is the winning one, it should display the message, "This hand wins!" at the bottom of the deck. 

// Now when you load the page, you should see two different hands with a randomly changing winner every time you refresh. 

class Pokegame extends Component {

  static defaultProps = {
    pokemon: [
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
    ]
  };

  render() {
 // take your list of 8 pokemon and randomly assign them into 2 hands of 4 cards each. It should then render two Pokedex components, one for each hand. 
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }

    console.log(hand1)
    console.log(hand2)

// Next, have the Pokegame component determine which hand is the "winner," where the winning hand is the one with the higher total experience. Then modify the Pokedex component one more time so that it accepts a prop of isWinner. If the Pokedex is the winning one, it should display the message, "This hand wins!" at the bottom of the deck. 
    
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div className="Pokegame">
        <h1>Pokegame!</h1>
        <h1>Hand One!</h1>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <h1>Hand Two!</h1>
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}

export default Pokegame;