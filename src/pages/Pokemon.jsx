import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokedex } from "pokeapi-js-wrapper"


export default function Pokemon() {
  const pokemonId = useParams().pokemonId
  const [pokemon, setPokemon] = useState();  

  useEffect(() => {
    const P = new Pokedex();
    P.getPokemonByName(pokemonId).then((resp) => {setPokemon(resp)})

  }, [pokemonId])

  return (
    <div>
    <img src={pokemon ? pokemon.sprites.front_default : "monke"} alt="Pokemon"/>
    <p>{JSON.stringify(pokemon)}</p>
    </div>
  )
}