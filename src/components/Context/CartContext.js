import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({children})=>{
    
    const [itemsCarrito,setItemsCarrito] = useState([])
    const [cantidadGeneral,setCantidadGeneral] = useState(0)
    const [totalCompra,setTotalCompra] = useState(0)

    const cleanCarrito = ()=>{
        itemsCarrito.map(prod=>{
            prod.stock=prod.stock+prod.cantidadCarrito
        })
        setItemsCarrito([])
        setCantidadGeneral(0)
        setTotalCompra(0)
    }

    const disminuirCantidad = (producto)=>{
        if(producto.cantidadCarrito>=1){
            producto.stock++
            producto.cantidadCarrito--
            setCantidadGeneral(cantidadGeneral-1)
            setTotalCompra(totalCompra-producto.precio)
        }
        else if(producto.cantidadCarrito<=0){
            descartarProducto(producto)
        }
    }

    const descartarProducto = (producto)=>{
        const index = itemsCarrito.findIndex(prod=>{
            return prod.id==producto.id
        })
        producto.stock=producto.stock+producto.cantidadCarrito
        setCantidadGeneral(cantidadGeneral-producto.cantidadCarrito)
        setTotalCompra(totalCompra-(producto.cantidadCarrito*producto.precio))
        itemsCarrito.splice(index,1)
    }

    const addItem = (producto,suma)=>{
        const auxiliar = itemsCarrito.slice(0)
        const esRepetido = auxiliar.some(existente =>{
            if(existente.id == producto.id){
                existente.cantidadCarrito = existente.cantidadCarrito + suma 
                setCantidadGeneral(cantidadGeneral+suma)
                return true
            }
            else{
                return false
            }
        })
        if(esRepetido){
            console.log("No agrego")
        }
        else{
            producto.cantidadCarrito = suma
            auxiliar.push(producto)
            setItemsCarrito(auxiliar)           
            setCantidadGeneral(cantidadGeneral+suma)
            setTotalCompra(totalCompra+(producto.precio*producto.cantidadCarrito))
        }
    }

    const contextValue = {
        itemsCarrito,
        cantidadGeneral,
        addItem,
        cleanCarrito,
        disminuirCantidad,
        descartarProducto,
        setItemsCarrito,
        setCantidadGeneral,
        totalCompra,
        setTotalCompra
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default MiProvider

