import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({productosDeCarga}) => {
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        const cargaDeDatos = new Promise ((res,rej)=>{
            setTimeout(()=>{
            res(productosDeCarga)
            },2000)
        })
        cargaDeDatos
        .then((resultado)=>{
            console.log("Se cargaron correctamente los datos en ItemDetailContainer")
            setProductos(resultado)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    return (
        <ItemDetail item={productos}/>    
        //Para visualizar los detalles cambiar "productos" a "productos[3]"
    )
}

export default ItemDetailContainer