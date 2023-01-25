import { FC } from "react";
import { useLocation } from "react-router-dom";
import Pokemon, { PokemonTypes } from "../types/Pokemon";

// interface PokemonDetailsProps {
//   pokemon: Pokemon;
// }
export const PokemonDetails = () => {
  const location = useLocation();
  const pokemon = location.state;
  return (
    <ul className="list-unstyled">
      <li>Name:{pokemon.name}</li>
      <li>Color:{pokemon.color}</li>
      <li>Power:{pokemon.power}</li>
      {/* <li className="my-2 mx-auto">
        {pokemon.types.map((currPokemonType) => {
          return (
            <span className="badge bg-secondary mx-1 bg-info">
              {PokemonTypes[currPokemonType]}
            </span>
          );
        })}
      </li> */}
    </ul>
  );
};
