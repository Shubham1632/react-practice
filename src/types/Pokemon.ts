export enum PokemonTypes {
  Normal,
  Fire,
  Water,
  Grass,
  Electric,
  Ice,
  Fighting,
  Poison,
  Ground,
  Flying,
  Psychic,
  Bug,
  Rock,
  Ghost,
  Dark,
  Dragon,
  Steel,
  Fairy,
}

export default interface Pokemon {
  id: number;
  name: string;
  types: string[];
  // imageUrl?: string;
  // about?: string;
  height: number;
  weight: number;
}
