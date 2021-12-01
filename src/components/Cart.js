import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const {cart, deleteCart, removeFromCart} = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <section>
                {
                    cart.map((prod) => {
                        return (<div className='m-5 border-2 p-3'>
                            <h3>{prod.name}</h3>
                            <p>${prod.price}</p>
                            <p>x{prod.count}</p>
                            <button className='btn btn-warning btn-xs' onClick={() => removeFromCart(prod.id)}>Remover item</button>
                        </div>)
                    })
                }
            </section>
            <hr/>
            <button className='btn btn-error' onClick={deleteCart}>Vaciar Carrito</button>
        </div>
    )
}
