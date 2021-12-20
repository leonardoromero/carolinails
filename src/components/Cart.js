import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartCard } from './CartCard'
import footerWaves from '../img/footer-waves.svg'

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
                    { cart.map((prod) => { return (
                        <CartCard 
                            {...prod} 
                            removeFromCart={removeFromCart} 
                            totalCart={totalCart} 
                            totalQuantity={totalQuantity}/>
                        )}) 
                    }
                </section>
                <hr/>
                <div className="flex justify-between my-3">
                    <div className="buttons">
                        <button className="btn btn-sm md:btn-md btn-error" onClick={deleteCart}>Vaciar Carrito</button>
                        <Link to="/checkout" className="btn btn-success my-3 md:my-0 md:mx-3">Finalizar compra</Link>
                    </div>
                    <h2 className="ml-auto font-bold text-xl md:text-3xl">Total: ${totalCart()}</h2>
                </div>
                
            </div>

            :
              <div className="hero min-h-screen" style={{ backgroundImage:`url(${footerWaves})` }}>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black">Aún no hay items en el carrito!</h1>   
                        <div className="buttons flex justify-center">
                            <button onClick={handlePreviousPage} className="btn bg-primary border-white hover:bg-secondary hover:border-white">Ir atrás</button>
                            <Link to="/" className="btn btn-outline mx-5 border-primary text-primary hover:bg-primary hover:text-white hover:border-white">Ir al inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
              }
        </>
    )
}
