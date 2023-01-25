import React from "react";
import { useLocation } from "react-router-dom";

const AboutPokemon = () => {
  const location = useLocation();
  const pokemon = location.state;
  console.log(pokemon.name);
  return <div>{pokemon.about}</div>;
};

export default AboutPokemon;
