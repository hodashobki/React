import axios from "axios";
import React, { useState ,useEffect } from "react";
 const PokemonAxios=(props)=>{
    const[pokemon,setPokemon]=useState("");
    // useEffect(()=>{
    //     axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    //         .then(response=>{setPokemon(response.data.results)})
    // }, []);
    const handelClick=(e)=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{setPokemon(response.data.results)})
}
    
     return (
        <div><h1>Pokemon via API</h1>
        <button onClick={handelClick}>Fetch Pokemons</button>
        <>
       
            {pokemon.length > 0 && pokemon.map((pokemon, i)=>{
                return (
                <li key={i}>{pokemon.name}</li>)
            })}
        </>
        </div>
     );
 }
  export default PokemonAxios;