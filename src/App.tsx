import { error } from "console";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonCardsContainer from "./components/PokemonCardsContainer/PokemonCardsContainer";
import { PokemonDetails } from "./components/PokemonDetails";
import { fakeApi } from "./PokemonApi";
import { pokemons } from "./pokemons";
import Pokemon from "./types/Pokemon";

function App() {
  const [selectedPokemonIdx, setSelectedPokemonIdx] = useState(-1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const showpokemondetailsbtnhandler = () => {
    setSelectedPokemonIdx(selectedPokemonIdx + 1);
  };
  useEffect(() => {
    fakeApi()
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="bg-secondary p-3">
        <Navbar />
        {pokemons.length ? (
          <PokemonCardsContainer pokemons={pokemons}></PokemonCardsContainer>
        ) : (
          <div>Loading Pokemons</div>
        )}
        <button onClick={showpokemondetailsbtnhandler}>Change pokemon</button>
      </div>
      {/* {pokemons[selectedPokemonIdx] ? (
        <PokemonDetails pokemon={pokemons[selectedPokemonIdx]} />
      ) : null} */}
    </>
  );
}

export default App;
