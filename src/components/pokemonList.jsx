import '../App.css'
import PokeCard from './PokeCard'
import { usePokemons } from '../functions/getPokemons';


function PokemonsList() {
    const pokemonsList = usePokemons();

    return (
      <div className="PokemonList">
        {
            pokemonsList.map((pokemon) => <PokeCard pokemon = {pokemon} key={Date.now + pokemon.url.split("/")[6]} />)
        }
      </div>
    )
  }
  
  export default PokemonsList