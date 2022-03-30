import { useState } from "react"
import { useEffect } from "react"
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({productosDeCarga}) => {
    const {id} = useParams()
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        toast.loading("Cargando producto")
        const cargaDeDatos = new Promise ((res,rej)=>{
            setTimeout(()=>{
            res(productosDeCarga)
            toast.dismiss()
            },500)
        })
        cargaDeDatos
        .then((resultado)=>{
            setProductos(resultado)
        })
        .catch(()=>{
            toast.error("No se pudo cargar los productos correctamente")
        })
    },[])

    const producto = productos.filter((prod)=>{
        return prod.id==id
    })
    return (
        <>        
            {producto.map((producto)=>{
                return <ItemDetail key={producto.id} item={producto}/>  
            })}        
        </>   
    )
}

export default ItemDetailContainer