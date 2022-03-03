import ItemListContainer from './ItemListContainer'

const Main = () => {
  const greeting = "Bienvenido a mi E-Commerce"
  return (
    <>
      <main>
        <ItemListContainer greeting={greeting} />
      </main>
    </>
    
  )
}

export default Main