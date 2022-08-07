import { useSelector } from 'react-redux'
import '../App.css'
import PokedexCard from './PokedexCard'

function PokedexList() {

  const pokedex = useSelector((state) => 
    state.pokedex
  )

  console.log(pokedex);

    return (
      <div className="PokedexList">
        { 
          pokedex.map((pokemon, i) => <PokedexCard pokemon = {pokemon} key={Date.now + i} />)
        }
      </div>
    )
  }
  
  export default PokedexList