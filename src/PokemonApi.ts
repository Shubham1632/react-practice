import axios from "axios";
import Pokemon, { PokemonTypes } from "./types/Pokemon";

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

export const fetchPokemon = async (): Promise<Pokemon[]> => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(pokemons);
  //   }, 2000);
  // });
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const pokemon: Pokemon[] = data.results.map(
    (currPokemon: any, index: number): Pokemon => {
      return {
        height: 0,
        name: currPokemon.name,
        id: index + 1,
        types: [],
        weight: 0,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      };
    }
  );
  return pokemon;
};

export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  console.log(data);
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,

    types: [],
  };
};
