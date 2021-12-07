import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Checkout = () => {

    const {cart} = useContext(CartContext)

    return (
        <div>
            <h1 className='text-5xl'>Checkout</h1>
        </div>
    )
}
