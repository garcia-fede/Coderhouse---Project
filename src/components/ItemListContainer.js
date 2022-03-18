import { useEffect } from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"
import ItemList from "./ItemList"
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom"

const ItemListContainer = ({productosDeCarga}) => {
  const [productos,setProductos] = useState([])
  const {categoryId} = useParams()
  useEffect(()=>{
      const cargaDeDatos = new Promise ((res,rej)=>{
        toast.loading("Los productos se estan cargando")
        setTimeout(()=>{
          toast.dismiss()
          res(productosDeCarga)
        },2000)
      })
      cargaDeDatos
      .then((resultado)=>{
        setProductos(resultado)
      })
      .catch((error)=>{
        toast.error("No se pudo cargar los productos correctamente")
      })
  },[categoryId])

  return (
      <ItemList item = {productos} />
  )
}

export default ItemListContainer