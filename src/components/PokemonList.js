import PokemonOption from './PokemonOption'
import ListPokemon from './ListPokemon'

const PokemonList=({pokemons,onPokemonSelected})=>{

    const handleChange=function(event){
        const chosenPokemon=pokemons[event.target.value]
        // console.log(chosenPokemon)
        onPokemonSelected(chosenPokemon)
    }

    const pokemonOptions=pokemons.map((pokemon,index)=>{
        return <PokemonOption pokemon={pokemon} key={pokemon.name} index={index}/>
    })

    const listAllPokemon=pokemons.map((pokemon,index)=>{
        return <ListPokemon pokemon={pokemon} key={index}/>
    })


    return (
        <div id="list-items-and-select">
            <div id="list-div">
                <h3>List of 20 Pokemon</h3>
                <hr></hr>
                <ul id="list-ul">
                    {listAllPokemon}
                </ul>
            </div>
            <div id="select-div">
                <h3>Select a Pokemon to view details</h3>
                <hr></hr>
                <select id='select' defaultValue="" onChange={handleChange}>
                    <option value="" selected>What Pokemon do you want to view?</option>
                    {pokemonOptions}
                </select>
            </div>
        </div>
    )
}
export default PokemonList