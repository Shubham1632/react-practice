import Pokemon, { PokemonTypes } from "./types/Pokemon";

export const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Pikachu",
    color: "Yellow",
    power: 200,
    types: [PokemonTypes.Electric],
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 2,
    name: "Charmander",
    color: "Orange",
    power: 300,
    types: [PokemonTypes.Fire],
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  },
  {
    id: 3,
    name: "Bulbasaur",
    color: "Green",
    power: 150,
    types: [PokemonTypes.Grass, PokemonTypes.Poison],
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 4,
    name: "Blastoise",
    color: "blue",
    power: 450,
    types: [PokemonTypes.Grass, PokemonTypes.Electric],
    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
  },
  {
    id: 5,
    name: "Pidgeot",
    color: "Orange",
    power: 150,
    types: [PokemonTypes.Electric, PokemonTypes.Flying],
    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
  },
];
