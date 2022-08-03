import '../App.css'
import { getPokemon, getEvolutionChain, getPokemonSpecies } from '../functions/getPokemons';
import { useParams } from "react-router-dom";
import { colours } from "../assets/colors";

function PokeDetails() {
    const {id} = useParams();
    console.log(id);

    const pokemonDetails = getPokemon(id);
    const pokemonSpecies = getPokemonSpecies(id);
    console.log(pokemonSpecies);
    const EvolutionChain = getEvolutionChain(pokemonSpecies.evolution_chain.url.split("/")[6]);
    console.log(EvolutionChain);
    console.log(pokemonDetails);

    pokemonDetails && pokemonDetails.abilities;

    return (
        <div className="PokeDetails">
            <div className='d-flex flex-column'>
                <h2 className='pokeBold pokeStat'>
                    { pokemonDetails &&  pokemonDetails.name}
                </h2>
                <span className='pokeLight'>
                    lv
                </span>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"} alt="" />
                <div className='d-flex flex-column pokeBold'>
                    <span>Items</span>
                    <span>None</span>
                </div>
            </div>
            {pokemonDetails && <div className='pokeStats'>
                <div className='pokeBold pokeStat'>
                    <span>HP</span>
                    <span>{pokemonDetails.stats[0].base_stat}</span>
                </div>
                <div className='pokeLight pokeStat'>
                    <span>Attack</span>
                    <span>{pokemonDetails.stats[1].base_stat}</span>
                </div>
                <div className='pokeBold pokeStat'>
                    <span>Defense</span>
                    <span>{pokemonDetails.stats[2].base_stat}</span>
                </div>
                <div className='pokeLight pokeStat'>
                    <span>SP.Atk</span>
                    <span>{pokemonDetails.stats[3].base_stat}</span>
                </div>
                <div className='pokeBold pokeStat'>
                    <span>SP.Def</span>
                    <span>{pokemonDetails.stats[4].base_stat}</span>
                </div>
                <div className='pokeLight pokeStat'>
                    <span>Speed</span>
                    <span>{pokemonDetails.stats[5].base_stat}</span>
                </div>
                <div className='pokeBold pokeStat pokeAbilities flex-column'>
                    <span>Abilities</span>
                    <span>
                        {
                            pokemonDetails.abilities.map(element => (element.ability.name)).join(' ')
                        }
                    </span>
                </div>
            </div>}

        </div>
    )
}

export default PokeDetails

