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
    <div className="">
      <div className=" overflow-hidden transform transition duration-400 hover:scale-110 hover:bg-emerald-400 w-60 rounded shadow-lg p-10  text-center ">
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
        <div className="">
          <button className="  overflow-hidden hover:bg-blue-200 text-slate-500 font-bold px-4 rounded-md h-8 my-4 mx-2 shadow-lg transform transition duration-400 hover:scale-110">
            <Link
              to={`/details/${pokemon.id}`}
              // state={pokemon}
              className=""
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
