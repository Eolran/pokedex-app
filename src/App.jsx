import { react } from "react";
import './App.css'
import PokemonList from './components/pokemonList'
import PokeDetails from './components/PokeDetails'
import PokedexList from './components/PokedexList'
import Banner from './banner'
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
    <Banner />
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokedex" element={<PokedexList />} />
          <Route path="/pokemon/:id" element={<PokeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
