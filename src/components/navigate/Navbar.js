// React imports
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./title/pokemon.png" alt="pokemon" width='80'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pokemon">Pokemon</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/description">Description</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
