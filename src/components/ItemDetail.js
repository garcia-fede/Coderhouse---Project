import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
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
                    <ItemCount stock={item.stock} inicial={1} onAdd={()=>{}} />
                </ul>
            </div>
    </div>
    )
}

export default ItemDetail