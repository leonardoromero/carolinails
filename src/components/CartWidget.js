import { BsFillCartCheckFill } from 'react-icons/bs'
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const {cart, totalQuantity} = useContext(CartContext)

    return (
        <>
            <div className="mt-2 indicator">
                <div className={`indicator-item badge ${cart.length === 0 && 'invisible'}`}>{totalQuantity()}</div> 
                <BsFillCartCheckFill className='text-2xl my-auto md:ml-3 text-primary'/>
            </div>
        </>
    )
}
