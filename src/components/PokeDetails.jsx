import '../App.css'
import { getPokemon } from '../functions/getPokemons';


function PokeDetails() {
    const pokemonDetails = getPokemon();
    console.log(pokemonDetails);
    return (
        <div className="PokeDetails">
            <h2>
                {pokemonDetails.name}
            </h2>
            
        </div>
    )
}

export default PokeDetails

