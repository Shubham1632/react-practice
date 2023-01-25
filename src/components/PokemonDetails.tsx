import { FC, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { PokemonApifetch } from "../PokemonApi";
import Pokemon, { PokemonTypes } from "../types/Pokemon";

// interface PokemonDetailsProps {
//   pokemon: Pokemon;
// }
export const PokemonDetails = () => {
  const location = useLocation();
  // const pokemon = location.state;
  const { nameorid } = useParams();
  console.log(`nameorid = ${nameorid}`);
  const [pokemon, setpokemon] = useState<Pokemon>();

  const getPokemonApi = async () => {
    const currPockemon = await PokemonApifetch(nameorid);
    setpokemon(currPockemon);
  };
  console.log(getPokemonApi);
  useEffect(() => {
    getPokemonApi();
  }, []);

  console.log(getPokemonApi);
  return pokemon ? (
    <div className=" card  ">
      <div className="card-body text-center px-auto ">
        <img src="" alt="" />
        <ul className="list-unstyled ">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt="none"
            className="card-top"
          />
          <li>Name:{pokemon.name}</li>
          <li>Height:{pokemon.height}</li>
          <li>Weight:{pokemon.weight}</li>
          {/* <li>NameId = {nameorid.nameorId}</li> */}
          {/* <Link to="/about" state={pokemon}>
            more info
          </Link> */}
          <li className="my-2 mx-auto">
            {" "}
            Type:
            {pokemon.types.map((currPokemonType: string) => {
              return (
                <span className="badge bg-secondary m-2 w-10 h10">
                  {currPokemonType}
                </span>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};
