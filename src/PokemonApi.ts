import { pokemons } from "./pokemons";
import axios from "axios";
import { TIMEOUT } from "dns";
import Pokemon, { PokemonTypes } from "./types/Pokemon";
import { idText } from "typescript";

// const pokemons: Pokemon[] = [
//   {
//     id: 1,
//     name: "Pikachu",
//     color: "Yellow",
//     power: 200,
//     types: [PokemonTypes.Electric],
//     imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
//   },
//   {
//     id: 2,
//     name: "Charmander",
//     color: "Orange",
//     power: 300,
//     types: [PokemonTypes.Fire],
//     imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
//   },
//   {
//     id: 3,
//     name: "Bulbasaur",
//     color: "Green",
//     power: 150,
//     types: [PokemonTypes.Grass, PokemonTypes.Poison],
//     imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
//   },
//   {
//     id: 4,
//     name: "Blastoise",
//     color: "blue",
//     power: 450,
//     types: [PokemonTypes.Grass, PokemonTypes.Electric],
//     imageUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
//   },
//   {
//     id: 5,
//     name: "Pidgeot",
//     color: "Orange",
//     power: 150,
//     types: [PokemonTypes.Electric, PokemonTypes.Flying],
//     imageUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
//   },
// ];

export const fakeApi = async (): Promise<Pokemon[]> => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );
  const pokemons: Pokemon[] = data.results.map(
    (pokemon: any, index: number): Pokemon => {
      return {
        name: pokemon.name,
        id: index + 1,
        height: 0,
        weight: 0,
        types: ["air", "fire"],
      };
    }
  );
  return pokemons;
};

export const PokemonApifetch = async (
  nameorid: string | undefined
): Promise<Pokemon> => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + nameorid
  );

  const typeOfPockemon: string[] = data.types.map((instance: any) => {
    return instance.type.name;
  });
  const pokemon: Pokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    types: typeOfPockemon,
  };

  return pokemon;
};
