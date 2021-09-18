import React, { Component } from "react";
import Pokedex from "./Pokedex";

// take your list of 8 pokemon and randomly assign them into 2 hands of 4 cards each. It should then render two Pokedex components, one for each hand. 

// once you've got this working, modify your Pokegame so that it also calculates the total experience for each hand of pokemon. It should pass this total to the Pokedex. 

// Next, have the Pokegame component determine which hand is the "winner," where the winning hand is the one with the higher total experience. Then modify the Pokedex component one more time so that it accepts a prop of isWinner. If the Pokedex is the winning one, it should display the message, "This hand wins!" at the bottom of the deck. 

// Now when you load the page, you should see two different hands with a randomly changing winner every time you refresh. 

class Pokegame extends Component {
  render() {
    return ()
  }
}

export default Pokegame;