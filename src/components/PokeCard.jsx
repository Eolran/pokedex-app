import '../App.css'


function PokeCard({pokemon}) {
    return (
        <div className="PokeCard">
            <div>
                <img src="" alt="" />
            </div>
            <h2>
                {pokemon.name};
            </h2>
        </div>
    )
}

export default PokeCard