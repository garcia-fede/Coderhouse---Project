import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <nav>
            <Link to="/"><h1>BRAND</h1></Link>
            <ul>
                <li><Link to="Categoria/Calzado">Calzado</Link></li>            
                <li><Link to="Categoria/Remeras">Remeras</Link></li>            
                <li><Link to="Categoria/Abrigos">Abrigos</Link></li>            
                <li><Link to="Categoria/Pantalones">Pantalones</Link></li>       
              <Link to="Carrito"><CartWidget /></Link>
            </ul>
        </nav>
    </>
  )
}

export default Header