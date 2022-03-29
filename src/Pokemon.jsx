import React from "react";
import { useParams } from "react-router-dom";
import { Pokedex } from "pokeapi-js-wrapper"


const P = new Pokedex();



P.getPokemonByName("1")
  .then(function(response) {
  })

export default function Pokemon() {
  return (
    <p>{useParams().pokemonId}</p>
  )
}