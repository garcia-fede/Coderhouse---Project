import { contexto } from "./Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Carrito = () => {

  const {itemsCarrito,disminuirCantidad,descartarProducto,cleanCarrito,setItemsCarrito,setCantidadGeneral} = useContext(contexto)
  const isEmpty = ()=>{
    if(itemsCarrito.length==0){
      return true      
    }else return false
  }
  const cargaCarrito = isEmpty()
  const terminarCompra = ()=>{
    toast.loading("Procesando compra")
    setTimeout(()=>{
      toast.dismiss()      
      toast.success("Su compra ha sido realizada con exito")
      setTimeout(()=>{
        setItemsCarrito([])
        setCantidadGeneral(0)
      },1500)
    },2000)
  }

  return (
    <>
      {
        cargaCarrito ? <div id="empty"><p>No hay productos seleccionados todavia</p><Link to="/"><button>Ir al catalogo</button></Link></div>
        
        :                 
        <div className="Carrito">
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
        <div className="bottomCart">
          <Link to="/"><button>Seguir comprando</button></Link>
          <button onClick={cleanCarrito}>Descartar productos</button>
          <button onClick={terminarCompra}>Terminar compra</button>
        </div>
      </div>
      }    
    </>
  )
}

export default Carrito