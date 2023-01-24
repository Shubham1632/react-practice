import { FC } from "react";
import Pokemon, { PokemonTypes } from "../../types/Pokemon";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}
const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="card col-2">
      <img
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt="pokemon"
        // className="card-img-top img-thumbnail"
        height="170"
        // width="150"
      />
      <div className="card-body text-center">
        {/* <li>id:{pokemon.id}</li> */}
        <h4 className="card-title">{pokemon.name}</h4>
        <ul className="card-text list-unstyled">
          <li>Color:{pokemon.color}</li>
          <li>Power:{pokemon.power}</li>
          <li className="my-2 mx-auto text-center">
            {pokemon.types.map((currPokemonType) => {
              return (
                <span className="badge bg-secondary mx-1 bg-info">
                  {PokemonTypes[currPokemonType]}
                </span>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
