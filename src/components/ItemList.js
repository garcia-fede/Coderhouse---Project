import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {

    console.log(item)
    console.log("Aux")

  return (
    <>
        <ul className='AUX'>
            {item.map((prod)=>{
                return <Item producto = {prod} />
            })}      
        </ul>
    </>
  )
}

export default ItemList