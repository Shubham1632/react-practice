import "./App.css";
import { useState, useEffect } from "react";
import PokemonCardsContainer from "./components/PokemonCardsContainer/PokemonCardsContainer";
import { fetchPokemon } from "./PokemonApi";
import Pokemon from "./types/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    try {
      const response = await fetchPokemon();
      setPokemons(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {pokemons.length ? (
        <PokemonCardsContainer pokemons={pokemons}></PokemonCardsContainer>
      ) : (
        <div>Loading Pokemons</div>
      )}
    </>
  );
}

export default App;
