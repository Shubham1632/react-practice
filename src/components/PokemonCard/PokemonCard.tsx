import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon, { PokemonTypes } from "../../types/Pokemon";
import { PokemonDetails } from "../PokemonDetails";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const [isshown, changeshow] = useState(false);

  const handleShowDetailsBtnClick = () => {
    changeshow(!isshown);
  };

  return (
    <div className="col">
      <div className="card ">
        <img
          src={
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` ||
            "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
          }
          alt="pokemon"
          // className="card-img-top img-thumbnail"
          height="170"
          width="150"
        />
        <div className="card-body text-center">
          <button className="bg-secondary rounded pd-md border-secondary p-1">
            <Link
              to={`/details/${pokemon.id}`}
              // state={pokemon}
              className="text-light text-unstyled"
            >
              {pokemon.name}
            </Link>
          </button>
          {/* <button onClick={handleShowDetailsBtnClick} className="btn btn-info">
            {" "}
            showdetail
          </button> */}
          {/* {console.log(pokemon.types[1]);} */}
          {/* {isshown ? <PokemonDetails pokemon={pokemon} /> : null} */}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
