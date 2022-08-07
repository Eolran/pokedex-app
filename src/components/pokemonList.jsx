import '../App.css'
import PokeCard from './PokeCard'
import { usePokemons, nextPokemons } from '../functions/getPokemons';

function showMore() {
    
}

function PokemonsList() {
    const pokemonsList = usePokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
    console.log(pokemonsList);
    const pokemonNext = nextPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
    console.log(pokemonNext)

    // setTimeout( () => {
    //     let pokemonListNext;
    //     pokemonListNext = usePokemons(pokemonNext);
    //     console.log(pokemonListNext);
    // }, 2000);

    


    return (
      <div className="PokemonList">
        {
            pokemonsList.map((pokemon) => <PokeCard pokemon = {pokemon} key={Date.now + pokemon.url.split("/")[6]} />)
        }
      </div>
    )
  }
  
  export default PokemonsList