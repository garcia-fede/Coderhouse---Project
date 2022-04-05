import { useState,useEffect } from "react"
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from "./firebase"
import { collection,getDocs,query,where } from "firebase/firestore"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const productosCollection = collection(db,"productos")
        const p = query(productosCollection,where("id","==",parseInt(id)))
        const producto = getDocs(p)
        producto
        .then((resultado)=>{
            const itemDetail = resultado.docs.map((prod)=>{
                return prod.data()
            })
            setProductos(itemDetail)
        })
        .catch(()=>{
            toast.error("Se produjo un error al cargar el producto")
        })
    },[])

    return (
        <>        
            {productos.map((producto)=>{
                return <ItemDetail key={producto.id} item={producto}/>  
            })}        
        </>   
    )
}

export default ItemDetailContainer