import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const [stock,setStock] = useState([item.stock])
    
    const onAdd = (cantidad)=>{
        setStock((stock-cantidad))
        item.stock=(stock-cantidad)
        // localStorage.setItem(`stock${item.id}`,stock)
        if(cantidad>stock&&stock<=0){
            setStock("No disponible")
        }
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
                <h2>
                    Descripción del producto
                </h2>
                <ul>                    
                    <li>
                        Precio: {item.precio}
                    </li>
                    <li>
                        Talle: {item.talle}
                    </li>
                    <li>
                        Color: {item.color}
                    </li>
                    <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
                    <Link to="/Carrito"><button>Finalizar compra</button></Link>
                </ul>
            </div>
    </div>
    )
}

export default ItemDetail