import { useState } from "react"

const ItemCount = ({inicial,stock, onAdd}) => {
    let [cantidad,setCantidad] = useState(inicial)
    const sumar = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const restar = ()=>{
        setCantidad(cantidad-1)
    }

    const enviarCantidad = ()=>{
        onAdd(cantidad)
        console.log(cantidad)
        setCantidad(inicial)
    }

    return (
        <>
            <div>Cantidad a agregar: {cantidad}</div>
            <div>Stock disponible: {stock}</div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={enviarCantidad}>Añadir al carrito</button>
        </>
    )
}

export default ItemCount
