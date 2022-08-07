import '../App.css'
import { Link } from 'react-router-dom'
import { REMOVE } from '../functions/pokedex.service';
import { useDispatch } from 'react-redux';


function PokedexCard({ pokemon }) {

    //On utilise seulement la fonction de REMOVE du Pokedex a l'intérieur de celui ci, pas besoin de la fonction d'ADD
    const dispatch = useDispatch()
    const PokedexRemove= () => {
        console.log(pokemon);
        dispatch(REMOVE(pokemon))
    }

    return (
        <div className="PokedexCard">
            <Link to={'../pokemon/' + pokemon.url.split("/")[6]}>
                <div>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.split("/")[6] + ".png"} alt="pkmnImg" />
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
            <button onClick={PokedexRemove}>
                <img className='btnPokedex' src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" height="40px" width="40px" alt="pkball" />
            </button>
        </div>
    )
}

export default PokedexCard