import "./App.css";
import PokemonCardsContainer from "./components/PokemonCardsContainer/PokemonCardsContainer";
import { pokemons } from "./pokemons";

function App() {
  return <PokemonCardsContainer pokemons={pokemons} />;
}

export default App;
