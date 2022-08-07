import './App.css'
import Search from './search'
import { Link} from "react-router-dom";

function Banner() {

  return (
    <nav className="Banner">
        <Link to="/home">
          <button>
            Accueil
          </button>
        </Link>
        <Link to="/pokedex">
          <button>
            Pokedex
          </button>
        </Link>

      
    </nav>
  )
}

export default Banner