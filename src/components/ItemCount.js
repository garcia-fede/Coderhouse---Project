import { useState } from "react"
// <ItemCount stock={5} inicial={1} onAdd={()=>{}}/>
// RETORNO TEMPORALMENTE DESHABILITADO DE ITEMLISTCONTAINER

const ItemCount = ({inicial,stock, onAdd}) => {    

    let [cantidad,setCantidad] = useState(inicial)
    const sumar = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
        const restar = ()=>{
        if(cantidad>1){
        setCantidad(cantidad-1)
        }
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
