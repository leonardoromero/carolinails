import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartCard } from './CartCard'

export const Cart = () => {

    const {cart, deleteCart, removeFromCart, totalQuantity, totalCart} = useContext(CartContext)
    const navigate = useNavigate()

    const handlePreviousPage = () => {
        navigate(-1)
    }

    return (
        <>
            {cart.length > 0

            ? <div className="p-3 max-w-5xl mx-auto">
                <h1 className="text-5xl my-5">Este es tu carrito</h1>
                <section>
                    { cart.map((prod) => { return <CartCard {...prod} removeFromCart={removeFromCart} totalCart={totalCart} totalQuantity={totalQuantity}/>}) }
                </section>
                <hr/>
                <div className="buttons flex justify-center mt-3">
                    <button className='btn btn-error' onClick={deleteCart}>Vaciar Carrito</button>
                    <Link to="/checkout" className='btn btn-success mx-3'>Finalizar compra</Link>
                    <h2 className="ml-auto font-bold text-3xl">Total: ${totalCart()}</h2>  
                </div>
                
            </div>

            : <div className="py-10">
                <p className="text-4xl md:text-5xl text-center p-10">Aún no hay items en el carrito!</p>
                <div className="buttons flex justify-center">
                    <button onClick={handlePreviousPage} className="btn btn-primary">Ir atrás</button>
                    <Link to="/" className="btn btn-outline mx-5">Ir al inicio</Link>
                </div>
              </div>}
        </>
    )
}
