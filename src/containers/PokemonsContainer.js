import React,{useState,useEffect} from "react"
import PokemonList from '../components/PokemonList'
import PokemonDetails from "../components/PokemonDetails"
import PokemonUrl from "../components/PokemonUrl"

const PokemonsContainer=()=>{
    const [pokemonList,setPokemonList]=useState([])
    const [pokemonDetails,setPokemonDetails]=useState(null)
    const [pokemonUrl,setUrl]=useState(null)
    const [offset,setOffset]=useState(0)
    const [limit,setLimit]=useState(20)

    useEffect(()=>{
        getPokemonList()
        getPokemonData()
    },[pokemonUrl,offset])

    const getPokemonList=function(){
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
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
    const onPrevChange=function(newOffset){
        // console.log( "New url: ",newOffset,newLimit)
        setOffset(newOffset)
        // setLimit(newLimit)
    }
    const onNextChange=function(newOffset){
        setOffset(newOffset)
        // setLimit(newLimit)
    }

    return(
        <div id="pokemon-container">
            <h1>Select a Pokemon!</h1>

            <hr></hr>
            <PokemonUrl curOffset={offset} curLimit={limit} onPrevChange={onPrevChange} onNextChange={onNextChange}/>
            <div id="select-and-display">
                <PokemonList pokemons={pokemonList} onPokemonSelected={onPokemonSelected} curOffset={offset}/>
                <hr></hr>
            </div>
            <div id="poke-details">
                {pokemonDetails &&<PokemonDetails pokemon={pokemonDetails}/>}
            </div>
        </div>
    )
}
export default PokemonsContainer