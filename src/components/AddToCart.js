import React from 'react'
import { ItemCount } from './ItemCount'

export const AddToCart = ( {stock, initial, count, setCount, handleAdd}) => {
    return (
        <div className='addToCart'>
            <ItemCount 
                stock={stock} 
                initial={initial} 
                count={count} 
                setCount={setCount} 
            />
            <button 
                className='btn btn-sm mb-3 w-60' 
                onClick={handleAdd}
                disabled={count === 0}
            >Agregar al carrito</button>
        </div>
    )
}
