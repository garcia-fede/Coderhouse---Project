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
        if(categoryId=="Calzado"){
          const calzado = resultado.filter(producto=>producto.categoria=="Zapatillas")
          setProductos(calzado)
        }
        else if(categoryId=="Pantalones"){
          const pantalones = resultado.filter(producto=>producto.categoria=="Pantalones")
          setProductos(pantalones)
        }
        else if(categoryId=="Abrigos"){
          const abrigos = resultado.filter(producto=>producto.categoria=="Abrigos")
          setProductos(abrigos)
        }
        else if(categoryId=="Remeras"){
          const remeras = resultado.filter(producto=>producto.categoria=="Remeras")
          setProductos(remeras)
        }
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