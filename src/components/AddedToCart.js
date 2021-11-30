import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount.js'

export const AddedToCart = () => {
    return (
        
        <div className='addedToCart'>
            <div className='mt-20'></div>
            <Link to='/cart' className='btn btn-sm btn-success mb-3 w-full'>
                Ir al carrito
            </Link>
        </div>
    )
}
