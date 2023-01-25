import { FC } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Pokemon, { PokemonTypes } from "../types/Pokemon";

// interface PokemonDetailsProps {
//   pokemon: Pokemon;
// }
export const PokemonDetails = () => {
  const location = useLocation();
  const pokemon = location.state;
  const nameorid = useParams();
  console.log(nameorid);
  return (
    <ul className="list-unstyled">
      <li>Name:{pokemon.name}</li>
      <li>Color:{pokemon.color}</li>
      <li>Power:{pokemon.power}</li>
      <li>NameId = {nameorid.nameorId}</li>
      <Link to="/about" state={pokemon}>
        more info
      </Link>
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
