import '../App.css'
import { BrowserRouter as Router, Link } from "react-router-dom";


function PokeCard({ pokemon }) {
    return (
        <Link to={'./pokemon/' + pokemon.url.split("/")[6]} className="PokeCard">
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.split("/")[6] + ".png"} alt="" />
            </div>
            <h2>
                {pokemon.name}
            </h2>
            <span>
                n°{pokemon.url.split("/")[6]}
            </span>
        </Link>
    )
}

export default PokeCard