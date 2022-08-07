import '../App.css'
import { getPokemon, getEvolutionChain, getPokemonSpecies } from '../functions/getPokemons';
import { ADD, REMOVE } from '../functions/pokedex.service.js';
import { useParams } from "react-router-dom";
import { colours } from "../assets/colors";
import { useDispatch } from "react-redux";

function getEvolutions(chain, evolutions = []) {
    if (chain.chain !== undefined) {
        const name = chain.chain.species?.name;
        const id = chain.chain.species?.url.split("/").reverse()[1];
        evolutions.push({ name, id });
    } else {
        const name = chain.species?.name;
        const id = chain.species?.url.split("/").reverse()[1];
        evolutions.push({ name, id });
    }
    console.log(evolutions);
    console.log(chain);

    if (chain?.chain !== undefined) {
        if (chain?.chain.evolves_to.length === 0) return evolutions;
        else return getEvolutions(chain?.chain.evolves_to[0], evolutions);
    } else {
        if (chain.evolves_to.length === 0) return evolutions;
        return getEvolutions(chain?.evolves_to[0], evolutions);
    }
}

function PokeDetails() {
    let pokedexList = JSON.parse(localStorage.getItem("pokedexList"));
    let EvolutionChain;

    let EvolveDetails = [];

    const { id } = useParams();
    console.log(id);

    const pokemonDetails = getPokemon(id);
    const pokemonSpecies = getPokemonSpecies(id);
    if (pokemonSpecies) {
        EvolutionChain = getEvolutionChain(pokemonSpecies.evolution_chain.url);
        EvolutionChain.then(res => {
            console.log(res);
            getEvolutions(res, EvolveDetails);
//document.getElementById('evolveChain').innerHTML = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png
            
            // for (let i = 0; i < EvolveDetails.length; i++) {
            //     document.getElementById('evolveChain').innerHTML += `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${EvolveDetails[i].id}.png' alt=''>`
                
            // }

            EvolveDetails.forEach(element => {
                document.getElementById('evolveChain').innerHTML += `
                <div class="EvolveCard">
                    <a href='../pokemon/${element.id}'>
                    <img class="EvolveImg" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png' alt=''>
                    <h2>${element.name}</h2>
                    <span>N°${element.id}</span>
                    </ a>
                </div>
                `
            });
        })
    }

    const dispatch = useDispatch()
    const PokedexInit = () => {
        dispatch(ADD(pokemonDetails.species)) 
    }
    const PokedexRemove = () => {
        dispatch(REMOVE(pokemonDetails.species))
    }
    function togglePokedex() {
        if (pokedexList.find(pokemonName => pokemonName.name == pokemonDetails.name) != undefined) {
            PokedexRemove();
            console.log("Fonction REMOVE")

            pokedexList = JSON.parse(localStorage.getItem("pokedexList"));
        } else {
            PokedexInit();
            console.log("Fonction ADD")

            pokedexList = JSON.parse(localStorage.getItem("pokedexList"));
        }
    }

    // if (pokedexList.find(pokemonName => pokemonName.name == pokemonDetails.name) != undefined) {
    //     document.getElementById("pokedexBtn").innerHTML = "Remove from Pokedex";
    // } else {
    //     document.getElementById("pokedexBtn").innerHTML = "Add to Pokedex";
    // }

    console.log(pokemonDetails);
    console.log(pokemonSpecies);
    console.log(EvolveDetails);

    pokemonDetails && pokemonDetails.abilities;

    return (

        <div className="PokeDetails">
            <div className='pokeBoxStats'>
                <>
                    <style>
                        {`
                .pokeImg {
                    text-align:center;
                    background: repeating-linear-gradient(0deg,
                        #F3F3EF,
                        #F3F3EF 10px,
                        #FFFFFF 10px,
                        #FFFFFF 20px);
                    background: linear-gradient(#fffff, transparent, #fffff);
                }

                .pokeImg img {
                    width: 150px;
                    height: 150px;
                }
            `}
                    </style>
                </>
                <div className='d-flex flex-column'>
                    <h2 className='pokeBold pokeStat'>
                        {pokemonDetails && pokemonDetails.name}
                    </h2>
                    <span className='pokeLight'>
                        lv
                    </span>
                    <div className='pokeImg'>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} alt="" />
                    </div>
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

            <button id='pokedexBtn' onClick={() => { togglePokedex() }}>

            </button>
            
            <h2 className='text-center'>Evolution Chain</h2>
            <div id='evolveChain' className='evolveChain'>
                
                
            </div>

        </div>
    )
}

export default PokeDetails

/*
EvolveDetails.map(element => (
                        `<div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png">
                        </div>`
                        ))
*/