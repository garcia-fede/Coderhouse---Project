import ItemCount from "./ItemCount"
import { useState,useContext } from "react"
import { contexto } from "./Context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const [stock,setStock] = useState([item.stock])
    const {addItem} = useContext(contexto)

    const onAdd = (cantidad)=>{
        setStock((stock-cantidad))
        item.stock=(stock-cantidad)
        if(cantidad<=stock&&stock>0){            
            // item.cantidadCarrito=cantidad
            addItem(item,cantidad)
        }
        if(cantidad>stock&&stock<=0){
            setStock("No disponible")
        }
        // localStorage.setItem(`stock${item.id}`,stock)
    }
    
    const agregarItem = ()=>{
        // addItem(item)
    }
    
    return (
        <div className='itemDetail'>
            <div>
                <img src={item.url} alt="" />                    
            </div>
            <div id="descripcion">
                <h1>
                    {item.nombre}
                </h1>  
                <h2 className="itemDesc">
                    Descripción del producto
                </h2>
                <ul>                    
                    <li>
                        $ {item.precio}
                    </li>
                    <li>
                        Talle: {item.talle}
                    </li>
                    <li>
                        Color: <span>{item.color}</span>
                    </li>
                    <ItemCount stock={stock} inicial={1} onAdd={onAdd} agregarItem={agregarItem} />
                    <Link to="/Carrito"><button onClick={agregarItem}>Finalizar compra</button></Link>
                </ul>
            </div>
    </div>
    )
}

export default ItemDetail