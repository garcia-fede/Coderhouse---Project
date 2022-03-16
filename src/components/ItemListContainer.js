import { useEffect } from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting, productosDeCarga}) => {
  const [productos,setProductos] = useState([])
  useEffect(()=>{
      const cargaDeDatos = new Promise ((res,rej)=>{
        setTimeout(()=>{
          res(productosDeCarga)
        },2000)
      })
      cargaDeDatos
      .then((resultado)=>{
        console.log("Se cargaron correctamente los datos en ItemListContainer")
        setProductos(resultado)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  console.log("Productos actualmente:")

  return (
    <>
      {/* <div id="greeting">{greeting}</div>
      <ItemCount stock={5} inicial={1} onAdd={()=>{}}/> */}
      <ItemList item = {productos} />
    </>
  )
}

export default ItemListContainer