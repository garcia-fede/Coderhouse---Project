import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div id="greeting">{greeting}</div>
      <ItemCount stock={5} inicial={1} onAdd={()=>{}}/>
    </>
  )
}

export default ItemListContainer