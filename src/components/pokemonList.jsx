import '../App.css'
import { usePokemons } from '../functions/getPokemons';

function PokemonsList() {
    const pokemons = usePokemons()
    console.log(pokemons);
    for (let i = 0; i < pokemons.length; i++) {
        console.log(pokemons[i]);
        
    }
    return (
      <div className="PokemonList">
        test
      </div>
    )
  }
  
  export default PokemonsList