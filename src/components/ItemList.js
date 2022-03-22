import Item from './Item'

const ItemList = ({item}) => {

  return (
        <ul className='itemList'>
            {item.map((prod)=>{
                return <Item  key={prod.id} producto = {prod} />
            })}      
        </ul>
  )
}

export default ItemList