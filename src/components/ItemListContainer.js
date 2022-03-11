import { useEffect } from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"
import ItemList from "./ItemList"

const productosDeCarga = [
  {
    nombre: "Remera",
    id: 1,
    precio: 100,
    url: 'https://cdn.shopify.com/s/files/1/1650/5551/products/STONE_GREY_MEN_S_HALF_SLEEVES_TSHIRT_800x.jpg?v=1581689292'
  },
  {
    nombre: "Campera",
    id: 3,
    precio: 300,
    url: 'https://ae01.alicdn.com/kf/H8f78b0a04e4c44ee9d8f78fcb3754c3f5/Maden-Canvas-Oil-Wax-Men-Jackets-Khaki-Retro-Multi-pocket-Beaded-Canvas-Ami-Kaji-Jacket-Big.jpg'
  },
  {
    nombre: "Jean",
    id: 5,
    precio: 500,
    url: 'https://sc04.alicdn.com/kf/Hc8dfa6906e2c4b0bb5b3cfdad7b8e4a2C.jpg'
  }
]

const ItemListContainer = ({greeting}) => {
  const [productos,setProductos] = useState([])
  
  useEffect(()=>{
      console.log("Comienzo useEffect")
      const cargaDeDatos = new Promise ((res,rej)=>{
        setTimeout(()=>{
          res(productosDeCarga)
        },2000)
      })
      cargaDeDatos
      .then((resultado)=>{
        console.log("Se cargaron correctamente los datos")
        setProductos(resultado)
      })
      .catch((error)=>{
      })
  },[])

  console.log("Productos actualmente:")
  console.log(productos)

  return (
    <>
      {/* <div id="greeting">{greeting}</div>
      <ItemCount stock={5} inicial={1} onAdd={()=>{}}/> */}
      <ItemList item = {productos} />
    </>
  )
}

export default ItemListContainer