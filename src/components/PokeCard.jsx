import '../App.css'
import { Link } from "react-router-dom";
import { REMOVE, ADD } from '../functions/pokedex.service';
import { useDispatch } from 'react-redux';


function PokeCard({ pokemon }) {

    //Initialisation Pokedex si cache vidé
    let pokedexList = localStorage.getItem("pokedexList") ?JSON.parse(localStorage.getItem("pokedexList")): [];

    //Fonctions de gestion du Pokedex
    const dispatch = useDispatch()
    const PokedexInit= () => {
        console.log(pokemon);
        dispatch(ADD(pokemon))
        console.log("FONCTION LANCÉE : ADD");

        pokedexList = JSON.parse(localStorage.getItem("pokedexList"));
        document.getElementById(pokemon.url.split("/")[6]).innerHTML = `<img id={pokemon.url.split("/")[6]} className='PKMNImg' src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" height="40px" width="40px" alt="pkball" />`;
        

    }
    const PokedexRemove= () => {
        console.log(pokemon);
        dispatch(REMOVE(pokemon))
        console.log("FONCTION LANCÉE : REMOVE");

        pokedexList = JSON.parse(localStorage.getItem("pokedexList"));
        document.getElementById(pokemon.url.split("/")[6]).innerHTML = `<img id={pokemon.url.split("/")[6]} className='PKMNImg' src="https://www.svgrepo.com/show/388314/pokeball-one.svg" height="40px" width="40px" alt="pkball" />`;
    }

    function togglePokedex() {
        if (pokedexList.find(pokemonName => pokemonName.name == pokemon.name) != undefined) {
            PokedexRemove();
        } else {
            PokedexInit();
        }
    }

    return (
        <div className="PokeCard">
            <Link to={'../pokemon/' + pokemon.url.split("/")[6]}>
                <div>
                    <img className='PKMNImg' src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.split("/")[6] + ".png"} alt="" />
                </div>
                <div>
                    <h2>
                        {pokemon.name}
                    </h2>
                </div>
                <span>
                    n°{pokemon.url.split("/")[6]}
                </span>
            </Link>
            <button id={pokemon.url.split("/")[6]} onClick= {togglePokedex} >
                <img className='btnPokedex' 
                src={pokedexList.find(pokemonName => pokemonName.name == pokemon.name) != undefined ? "https://www.svgrepo.com/show/276264/pokeball-pokemon.svg": "https://www.svgrepo.com/show/388314/pokeball-one.svg"} 
                height="40px" width="40px" alt="pkball" />
            </button>
        </div>
    )
}


export default PokeCard