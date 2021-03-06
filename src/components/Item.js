import {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { AddToCart } from './AddToCart'
import { AddedToCart } from './AddedToCart'

export const Item = ( { id, name, price, img, stock } ) => {

    let [count, setCount] = useState(0)
    const {addToCart, isInCart} = useContext(CartContext)

    const handleAdd = () => {
        
        if(count > 0){
            addToCart({id, name, price, count, img})
        }
    }
    
    return (
        <>
            <article className="card text-center shadow-2xl md:max-w-xs m-8 bg-base-200">
                <img src={img} className="rounded-xl rounded-b-none object-cover h-64 w-full" alt={name}/>
                <div className="card-body">
                    <h2 className="card-title md:h-20">{name}</h2> 
                    <p>${price}</p> 

                    {!isInCart(id)
                    ? <AddToCart 
                        stock={stock} 
                        initial={0} 
                        count={count} 
                        setCount={setCount} 
                        handleAdd={handleAdd}/>
                    : <AddedToCart/>}
                    
                    <Link 
                        to={`/services/detail/${id}`} 
                        className="btn btn-outline btn-sm w-40 m-auto">
                        Detalles
                    </Link>
                </div>
            </article> 
        </>
    )
}

