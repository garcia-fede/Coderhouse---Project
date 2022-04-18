import { useEffect,useState } from "react"
import ItemList from "./ItemList"
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection,getDocs,query,where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos,setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(()=>{

    const productosCollection = collection(db,"productos")
    const prods = getDocs(productosCollection)
    prods
    .then((resultado)=>{
      if(categoryId=="Calzado"){
        const c = query(productosCollection,where("categoria","==","Zapatillas"))
        const calzado = getDocs(c)
        calzado
        .then((resultado)=>{
          const soloCalzado = resultado.docs.map((prod)=>{
            return prod.data()
          })
          setProductos(soloCalzado)
        })
        .catch(()=>{
          toast.error("No se pudo cargar la categoria")
        })
      }
      else if(categoryId=="Calzado"){
        const c = query(productosCollection,where("categoria","==","Zapatillas"))
        const calzado = getDocs(c)
        calzado
        .then((resultado)=>{
          const soloCalzado = resultado.docs.map((prod)=>{
            return prod.data()
          })
          setProductos(soloCalzado)
        })
        .catch(()=>{
          toast.error("No se pudo cargar la categoria")
        })
      }
      else if(categoryId=="Remeras"){
        const r = query(productosCollection,where("categoria","==","Remeras"))
        const remeras = getDocs(r)
        remeras
        .then((resultado)=>{
          const soloRemeras = resultado.docs.map((prod)=>{
            return prod.data()
          })
          setProductos(soloRemeras)
        })
        .catch(()=>{
          toast.error("No se pudo cargar la categoria")
        })
      }
      else if(categoryId=="Abrigos"){
        const a = query(productosCollection,where("categoria","==","Abrigos"))
        const abrigos = getDocs(a)
        abrigos
        .then((resultado)=>{
          const soloAbrigos = resultado.docs.map((prod)=>{
            return prod.data()
          })
          setProductos(soloAbrigos)
        })
        .catch(()=>{
          toast.error("No se pudo cargar la categoria")
        })
      }
      else if(categoryId=="Pantalones"){
        const p = query(productosCollection,where("categoria","==","Pantalones"))
        const pantalones = getDocs(p)
        pantalones
        .then((resultado)=>{
          const soloPantalones = resultado.docs.map((prod)=>{
            return prod.data()
          })
          setProductos(soloPantalones)
        })
        .catch(()=>{
          toast.error("No se pudo cargar la categoria")
        })
      }
      else{
        const cargaCompleta = resultado.docs.map((prod)=>{
          return prod.data()
        })
        setProductos(cargaCompleta)
      }
    })
    .catch(()=>{
      toast.error("No se pudieron cargar los productos")
    })

  },[categoryId])

  return (
      <ItemList item = {productos} />
  )
}

export default ItemListContainer
