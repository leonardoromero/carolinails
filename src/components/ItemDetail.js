import React, {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {AddToCart} from './AddToCart'
import {AddedToCart} from './AddedToCart'
import { useNavigate } from 'react-router'

export const ItemDetail = ( { id, name, desc, price, img, stock } ) => {

    let [count, setCount] = useState(0)
    const {addToCart, isInCart} = useContext(CartContext)
    const navigate = useNavigate()

    const handlePreviousPage = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        
        if(count > 0){
            addToCart({id, name, price, count, img})
        }
    }

    return (
        <>
            <div className="flex justify-center bg-primaryFocus">
                <div className="card text-center shadow-2xl md:max-w-md m-8 bg-base-200">
                    <img src={img} className="rounded-xl rounded-b-none object-cover h-100 w-full" alt="img"/>
                    <div className="card-body">
                        <h2 className="card-title md:h-14">{name}</h2> 
                        <p>{desc}</p> 
                        <p>${price}</p>
                    </div>
                    {!isInCart(id)
                        ? <AddToCart
                            stock={stock} 
                            initial={0} 
                            count={count} 
                            setCount={setCount} 
                            handleAdd={handleAdd}/>
                        : <AddedToCart/>}
                    <button className='btn btn-outline btn-sm w-40 m-auto mb-4' onClick={handlePreviousPage}>Volver</button>
                </div> 
            </div>
        </>
    )
}
