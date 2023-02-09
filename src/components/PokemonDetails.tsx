import { FC, useEffect, useState } from "react";
import React from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { PokemonApifetch } from "../PokemonApi";
import Pokemon, { PokemonTypes } from "../types/Pokemon";

// interface PokemonDetailsProps {
//   pokemon: Pokemon;
// }
export const PokemonDetails = () => {
  const location = useLocation();
  // const pokemon = location.state;
  const param: any = useParams();
  // console.log(`nameorid = ${nameorid}`);
  const [pokemon, setpokemon] = useState<Pokemon | undefined>(undefined);

  const getPokemonApi = async () => {
    const currPockemon: Pokemon = await PokemonApifetch(param.nameorId);
    setpokemon(currPockemon);
  };
  // console.log(getPokemonApi);
  useEffect(() => {
    getPokemonApi();
  }, [param.nameorId]);

  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  console.log(getPokemonApi);
  return pokemon ? (
    <>
      <div className="flex justify-center py-10">
        <div className="bg-sky-200 max-w-sm rounded overflow-hidden shadow-lg p-10  text-center transform transition duration-400 hover:scale-110">
          <div className="">
            <ul className="list-none">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt="none"
                className="card-top"
                width="250"
              />
              <li>Name: {pokemon.name}</li>
              <li>Height: {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
              {/* <li>NameId = {nameorid.nameorId}</li> */}
              {/* <Link to="/about" state={pokemon}>
            more info
          </Link> */}
              <li className="my-2 mx-auto">
                {" "}
                Type:
                {pokemon.types.map((currPokemonType: string, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-blue-400 rounded-full text-sm font-semibold text-white  mx-2 px-2 py-1 "
                    >
                      {currPokemonType}
                    </span>
                  );
                })}
              </li>
            </ul>
            <button
              className="bg-blue-300 hover:bg-blue-700 text-white font-bold px-4 rounded-md h-9 my-5 mx-3 transform transition duration-400 hover:scale-110"
              onClick={goback}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
};
