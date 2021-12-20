import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart( [...cart, item])
    }

    const removeFromCart = (id) => {
        setCart( cart.filter(item => item.id !== id))
    }

    const deleteCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0)
    }

    const totalCart = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            deleteCart,
            totalQuantity,
            totalCart,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}