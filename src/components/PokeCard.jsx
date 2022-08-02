import '../App.css'


function PokeCard({pokemon}) {
    return (
        <div className="PokeCard">
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.url.split("/")[6] +".png"} alt="" />
            </div>
            <h2>
                {pokemon.name}
            </h2>
            <span>
               n°{pokemon.url.split("/")[6]}
            </span>
        </div>
    )
}

export default PokeCard