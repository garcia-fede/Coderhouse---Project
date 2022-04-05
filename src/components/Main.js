import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Carrito from './Carrito'
import { Route,Routes } from 'react-router-dom'
import productos from './ListadoProductos'

const Main = () => {
  return (
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="Categoria/:categoryId" element={<ItemListContainer/>} />
          <Route path="Producto/:id" element={<ItemDetailContainer />} />
        </Routes>     
      </main>
  )
}

export default Main