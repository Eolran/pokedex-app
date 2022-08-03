import { react } from "react";
import './App.css'
import PokemonList from './components/pokemonList'
import PokeDetails from './components/PokeDetails'
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
