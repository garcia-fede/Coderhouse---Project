import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Carrito from './Carrito'
import { Route,Routes } from 'react-router-dom'

const productos = [
  {
    nombre: "Remera",
    id: "1",
    precio: 100,
    url: 'https://cdn.shopify.com/s/files/1/1650/5551/products/STONE_GREY_MEN_S_HALF_SLEEVES_TSHIRT_800x.jpg?v=1581689292',
    stock: 5,
    color: "gris"
  },
  {
    nombre: "Campera",
    id: "2",
    precio: 300,
    url: 'https://ae01.alicdn.com/kf/H8f78b0a04e4c44ee9d8f78fcb3754c3f5/Maden-Canvas-Oil-Wax-Men-Jackets-Khaki-Retro-Multi-pocket-Beaded-Canvas-Ami-Kaji-Jacket-Big.jpg',
    stock: 10,
    color: "marron"
  },
  {
    nombre: "Jean",
    id: "3",
    precio: 500,
    url: 'https://sc04.alicdn.com/kf/Hc8dfa6906e2c4b0bb5b3cfdad7b8e4a2C.jpg',
    stock: 15,
    color: "azul"
  },
  {
    nombre: "Zapatillas AVIA",
    id: "4",
    precio: 700,
    url: 'https://dexvidadeportes.com/img/Producto/1019/a4f9bb89e05e1ca8d9764005c3561518-620acb4775035-800x800.jpg',
    stock: 20,
    color: "blanco",
    talle: 43
  }
]

const Main = () => {
  return (
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer productosDeCarga = {productos} />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="Categoria/:categoryId" element={<ItemListContainer productosDeCarga = {productos} />} />
          <Route path="Producto/:id" element={<ItemDetailContainer productosDeCarga = {productos} />} />
        </Routes>
        
        
      </main>
  )
}

export default Main