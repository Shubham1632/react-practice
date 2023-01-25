import { FC, useState } from "react";
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
    <div className="card ">
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
        <button onClick={handleShowDetailsBtnClick} className="btn btn-info">
          {" "}
          showdetail
        </button>
        {isshown ? <PokemonDetails pokemon={pokemon} /> : null}
      </div>
    </div>
  );
};

export default PokemonCard;
