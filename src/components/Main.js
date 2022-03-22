import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Carrito from './Carrito'
import { Route,Routes } from 'react-router-dom'
import productos from './ListadoProductos'

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