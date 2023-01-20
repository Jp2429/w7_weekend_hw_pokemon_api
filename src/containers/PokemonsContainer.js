import React,{useState,useEffect} from "react"
import PokemonList from '../components/PokemonList'
import PokemonDetails from "../components/PokemonDetails"

const PokemonsContainer=()=>{
    const [pokemonList,setPokemonList]=useState([])
    const [pokemonDetails,setPokemonDetails]=useState(null)
    const [pokemonUrl,setUrl]=useState(null)

    useEffect(()=>{
        getPokemonList()
        getPokemonData()
    },[pokemonUrl])

    // "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"

    const getPokemonList=function(){
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
            .then(res => res.json())
            .then(pokemonData=>setPokemonList(pokemonData.results))
            .catch(err => console.error(`Loading songs error: ${err}`));
    }
    const getPokemonData=function(){
        fetch(pokemonUrl)
            .then(res => res.json())
            .then(pokemonData=>setPokemonDetails(pokemonData))
            .catch(err => console.error(`Loading songs error: ${err}`));
    }
    
    const onPokemonSelected=function(pokemon){
        setUrl(pokemon.url)
    }

    return(
        <div id="pokemon-container">
            <h1>Select a Pokemon!</h1>
            <hr></hr>
            <div id="select-and-display">
                <PokemonList pokemons={pokemonList} onPokemonSelected={onPokemonSelected}/>
                <hr></hr>
            </div>
            <div id="poke-details">
                {pokemonDetails &&<PokemonDetails pokemon={pokemonDetails}/>}
            </div>
        </div>
    )
}
export default PokemonsContainer