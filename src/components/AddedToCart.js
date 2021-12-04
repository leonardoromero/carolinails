import React from 'react'
import { Link } from 'react-router-dom'

export const AddedToCart = () => {
    return (
        
        <div className='addedToCart'>
            <div className='mt-20'></div>
            <Link to='/cart' className='btn btn-sm btn-success mb-3 w-60'>
                Terminar mi compra
            </Link>
        </div>
    )
}
