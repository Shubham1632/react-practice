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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 grid-flow-row m-8">
        {pokemons.map((currPokemon, idx) => (
          <PokemonCard pokemon={currPokemon} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCardsContainer;
