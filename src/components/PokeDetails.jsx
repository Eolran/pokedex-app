import '../App.css'
import { getPokemon } from '../functions/getPokemons';


function PokeDetails() {
    const pokemonDetails = getPokemon();
    console.log(pokemonDetails);
    return (
        <div className="PokeDetails d-flex">
            <div className='d-flex flex-column'>
                <h2>
                    { pokemonDetails &&  pokemonDetails.name}
                </h2>
                <span>
                    lv
                </span>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} alt="" />
                <div className='d-flex flex-column'>
                    <span>Items</span>
                    <span>None</span>
                </div>
            </div>
            {pokemonDetails && <div>
                <div>
                    <span>HP</span>
                    <span>{pokemonDetails.stats[0].base_stat}</span>
                </div>
                <div>
                    <span>Attack</span>
                    <span>{pokemonDetails.stats[1].base_stat}</span>
                </div>
                <div>
                    <span>Defense</span>
                    <span>{pokemonDetails.stats[2].base_stat}</span>
                </div>
                <div>
                    <span>SP.Atk</span>
                    <span>{pokemonDetails.stats[3].base_stat}</span>
                </div>
                <div>
                    <span>SP.Def</span>
                    <span>{pokemonDetails.stats[4].base_stat}</span>
                </div>
                <div>
                    <span>Speed</span>
                    <span>{pokemonDetails.stats[5].base_stat}</span>
                </div>
            </div>}

        </div>
    )
}

export default PokeDetails

