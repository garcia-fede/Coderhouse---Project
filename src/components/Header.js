import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <nav>
            <Link to="/"><h1>BRAND</h1></Link>
            <ul>
                <li><Link to="Categoria/Calzado">Item 1</Link></li>            
                <li><Link to="Categoria/Remeras">Item 2</Link></li>            
                <li><Link to="Categoria/Abrigos">Item 3</Link></li>            
                <li><Link to="Categoria/Pantalones">Item 4</Link></li>       
              <Link to="Carrito"><CartWidget /></Link>
            </ul>
        </nav>
    </>
  )
}

export default Header