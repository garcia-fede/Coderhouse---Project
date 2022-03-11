import React from 'react'

const Item = ({producto}) => {
    console.log(producto)
  return (
      <>
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
                <button>COMPRAR</button>
            </div>
        </li>
      </>
  )
}

export default Item