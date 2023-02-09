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
import React from "react";

function App() {
  const [selectedPokemonIdx, setSelectedPokemonIdx] = useState(-1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setoffset] = useState(0);
  const showpokemondetailsbtnhandler = () => {
    setSelectedPokemonIdx(selectedPokemonIdx + 1);
  };
  useEffect(() => {
    console.log(offset);
    fakeApi(offset)
      .then((pokemons) => {
        setPokemons(pokemons);
        console.log(pokemons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [offset]);

  const next = () => {
    setoffset(offset + 20);
  };
  const prev = () => {
    if (offset >= 10) setoffset(offset - 20);
  };

  return (
    <>
      <div className="">
        {/* <Navbar /> */}
        {pokemons.length ? (
          <PokemonCardsContainer pokemons={pokemons}></PokemonCardsContainer>
        ) : (
          <div>Loading the Pokemons</div>
        )}
        <div className="flex justify-center ">
          {offset >= 10 ? (
            <button
              onClick={prev}
              className="bg-blue-300 mx-5 hover:bg-blue-700 text-white font-bold px-4 rounded-md h-11 transform transition duration-400 hover:scale-110"
            >
              prev
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={next}
            className="bg-blue-300 mx-4 hover:bg-blue-700 text-white font-bold px-4 rounded-md h-11  transform transition duration-400 hover:scale-110"
          >
            next
          </button>
        </div>
      </div>
      {/* {pokemons[selectedPokemonIdx] ? (
        <PokemonDetails pokemon={pokemons[selectedPokemonIdx]} />
      ) : null} */}
    </>
  );
}

export default App;
