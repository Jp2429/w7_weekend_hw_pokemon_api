const ListPokemon=({pokemon,id})=>{
    return(
        <li id="list-li">
            <p>{id}: {pokemon.name}</p>
        </li>
    )
}
export default ListPokemon