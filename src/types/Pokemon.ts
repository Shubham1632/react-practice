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
  height: number;
  weight: number;
  types: PokemonTypes[];
  imageUrl?: string;
}
