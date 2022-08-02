import '../App.css'
import PokeCard from './PokeCard'
import { usePokemons } from '../functions/getPokemons';


function PokemonsList() {
    const pokemonsList = usePokemons();

    return (
      <div className="PokemonList">
        {
            pokemonsList.map((pokemon) => <PokeCard pokemon = {pokemon} />)
        }
      </div>
    )
  }
  
  export default PokemonsList