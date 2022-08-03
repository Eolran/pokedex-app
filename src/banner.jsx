import './App.css'
import Search from './search'
import {BrowserRouter, Link} from "react-router-dom";

function Banner() {

  return (
    <nav className="Banner">
      <BrowserRouter>
        <Link to="/">
          <button>
            Accueil
          </button>
        </Link>
      </BrowserRouter>
      
      <Search />

      
    </nav>
  )
}

export default Banner