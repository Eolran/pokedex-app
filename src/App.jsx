import { react } from "react";
import './App.css'
import Search from './search'
import PokemonList from './components/pokemonList'
import PokeDetails from './components/PokeDetails'
// import { BrowserRouter, Route } from "react-router-dom";



function App() {

  return (

    <div className="App">
      {/* <Search />
      <PokemonList /> */}
      <PokeDetails />

    </div>

  )
}

export default App
