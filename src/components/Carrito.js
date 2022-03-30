import { contexto } from "./Context/CartContext"
import { useContext } from "react"

const Carrito = () => {

  const {itemsCarrito,disminuirCantidad,descartarProducto} = useContext(contexto)
  // console.log(cantidad)

  return (
    <>
      <ul className="itemCartContainer">
        {itemsCarrito.map(producto=>(
            <div className='itemCart' key={producto.id}>
              <img src={producto.url} alt="" />
              <h1>{producto.nombre}</h1>
              <p>{producto.cantidadCarrito} X $ {producto.precio}</p>
              <p>Color:{producto.color}</p>
              <p>Talle:{producto.talle}</p>
              <div>
                <button onClick={()=>{
                  disminuirCantidad(producto)
                }}>-</button>
                <button onClick={()=>{
                  descartarProducto(producto)
                }}>descartar</button>
              </div>
            </div>
          ))}
      </ul>      
    </>
  )
}

export default Carrito