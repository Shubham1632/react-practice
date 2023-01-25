import { FC } from "react";
import Pokemon from "../../types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonCardsContainer.css";

interface PokemonCardsContainerProps {
  pokemons: Pokemon[];
}

const PokemonCardsContainer: FC<PokemonCardsContainerProps> = ({
  pokemons,
}) => {
  return (
    <div className="container grid gap-3 row mx-auto my-5 row-col-lg-4 row-col-md-2">
      {pokemons.map((currPokemon, idx) => (
        <PokemonCard pokemon={currPokemon} key={idx} />
      ))}
    </div>
  );
};

export default PokemonCardsContainer;
