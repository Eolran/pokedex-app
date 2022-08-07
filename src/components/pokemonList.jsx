import '../App.css'
import PokeCard from './PokeCard'
import { usePokemons, nextPokemons } from '../functions/getPokemons';

function showMore() {
    
}

function PokemonsList() {
    //Récupération des 20 premiers Pokemons
    const pokemonsList = usePokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
    console.log(pokemonsList);

    //Récupération des 20 suivants
    const pokemonNext = nextPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
    console.log(pokemonNext)


    return (
      <div className="PokemonList">
        {
            pokemonsList.map((pokemon) => <PokeCard pokemon = {pokemon} key={Date.now + pokemon.url.split("/")[6]} />)
        }
      </div>
    )
  }
  
  export default PokemonsList