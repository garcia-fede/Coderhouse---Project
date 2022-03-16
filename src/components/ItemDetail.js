import React from 'react'

const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className='itemDetail'>
            <div>
                <img src={item.url} alt="" />                    
            </div>
            <div id="descripcion">
                <h1>
                    {item.nombre}
                </h1>  
                <h2>
                    Descripción del producto
                </h2>
                <ul>                    
                    <li>
                        Precio: {item.precio}
                    </li>
                    <li>
                        Talle: {item.talle}
                    </li>
                    <li>
                        Color: {item.color}
                    </li>
                    <li>
                        Stock disponible: {item.stock}
                    </li>
                </ul>
                <button>COMPRAR</button>
            </div>
    </div>
    )
}

export default ItemDetail