import { contexto } from "./Context/CartContext"
import { useContext,useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./firebase"
import { collection,serverTimestamp,addDoc } from "firebase/firestore"

const Carrito = () => {
  const {itemsCarrito,disminuirCantidad,descartarProducto,cleanCarrito,setItemsCarrito,setCantidadGeneral,setTotalCompra,totalCompra} = useContext(contexto)

  const isEmpty = ()=>{
    if(itemsCarrito.length==0){
      return true      
    }else return false
  }
  const cargaCarrito = isEmpty()
  const terminarCompra = ()=>{
    const comprador = {
      buyer: {
        nombre :"Lionel Messi",
        telefono:"10/07/2021",
        email:"campeon@copaamerica.com.ar"
      },
      items: itemsCarrito,
      date: serverTimestamp(),
      total: {totalCompra}
    }
    const orden = collection(db, "ordenes")
    const compra = addDoc(orden, comprador)
    compra
    .then((res)=>{
        toast.loading("Procesando compra")
        setTimeout(()=>{
        toast.dismiss()      
        toast.success("Su compra ha sido realizada con exito")
        toast.info(`ID de orden: ${res.id}`)
        setTimeout(()=>{
          setItemsCarrito([])
          setCantidadGeneral(0)
          setTotalCompra(0)
        },1500)
      },2000)
    })
    .catch()
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
          <p id="totalCompra">Total de la compra: $ {totalCompra}</p>
          <div>
            <Link to="/"><button>Seguir comprando</button></Link>
            <button onClick={cleanCarrito}>Descartar productos</button>
            <button onClick={terminarCompra}>Terminar compra</button>
          </div>
        </div>
      </div>
      }    
    </>
  )
}

export default Carrito