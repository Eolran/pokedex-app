import './App.css'
import Search from './search'
import { usePokemons } from './functions/getPokemons';



function App() {
  usePokemons()

  return (
    <div className="App">
      <Search />
    </div>
  )
}

export default App
