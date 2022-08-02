import '../App.css'
import { Link } from "react-router-dom";


function PokeCard({pokemon}) {
    return (
        <a href={'./'+pokemon.url.split("/")[6]} className="PokeCard">
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.url.split("/")[6] +".png"} alt="" />
            </div>
            <h2>
                {pokemon.name}
            </h2>
            <span>
               n°{pokemon.url.split("/")[6]}
            </span>
        </a>
    )
}

export default PokeCard