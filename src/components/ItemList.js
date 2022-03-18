import Item from './Item'

const ItemList = ({item}) => {

    console.log(item)

  return (
        <ul className='itemList'>
            {item.map((prod)=>{
                return <Item producto = {prod} />
            })}      
        </ul>
  )
}

export default ItemList