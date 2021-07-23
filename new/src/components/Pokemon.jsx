import React ,{useState,useEffect} from 'react';
const Pokemon=(props)=>{
const[pokemon,setPokemon]=useState("");
    
const handelClick=(e)=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
        return (response.json());
    })
    .then((response) => {setPokemon(response.results);
    })
    .catch(err => console.log("Error Fetching Pokemon" + err));
}

// }
//     useEffect(()=>{
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
//         .then(response=>response.json())
//         .then(response=>setPokemon(response.results))
//     },[]);

    return (
        <div><h1>Pokemon via API</h1>
        <button onClick={handelClick }>Fetch Pokemons</button>
        <>
       
            {pokemon.length > 0 && pokemon.map((pokemon, i)=>{
                return (
                <li key={i}>{pokemon.name}</li>)
            })}
        </>
        </div>
    );

}
export default Pokemon;