
const PokemonDetails=({pokemon})=>{

    return(
        <div id="poke-details">
            <ul id="details-ul">
                <li id="details-li">
                    <p className="p-tag"><b>Name:</b> {pokemon.name}</p>
                    <p className="p-tag"><b>Species:</b> {pokemon['species']['name']}</p> 
                    <p className="p-tag"><b>Height:</b>{pokemon.height}</p>             
                    <p className="p-tag"><b>Weight:</b> {pokemon.weight}</p> 
                    <img id="image" src={pokemon['sprites']['other']['official-artwork']['front_default']}/>
                </li>
            </ul>
        </div>
    )
}
export default PokemonDetails