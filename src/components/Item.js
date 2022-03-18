import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
    const ruta = "/Producto/"+producto.id
    return (
            <li>
                <div>
                    <img src={producto.url} alt="" />
                    <p>
                        Producto: {producto.nombre}
                    </p>  
                    <p>
                        Precio: {producto.precio}$
                    </p>
                    <p>
                        ID: {producto.id}
                    </p>
                    <Link to={ruta}><button>COMPRAR</button></Link>
                </div>
            </li>
    )
}

export default Item