import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="App">
      {/* <Pokedex /> */}
      <Pokecard name="Charmander" id={4} type="fire"  base_experience={62} />
    </div>
  );
}

export default App;
