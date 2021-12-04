import { BsFillCartCheckFill } from 'react-icons/bs'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const {cart, totalQuantity} = useContext(CartContext)

    return (
        <>
            <div className="mt-2 indicator">
                <div className={`indicator-item badge ${cart.length === 0 && 'invisible'}`}>{totalQuantity()}</div> 
                <BsFillCartCheckFill className='text-2xl mt-1 self-center ml-3 text-primary'/>
            </div>
        </>
    )
}
