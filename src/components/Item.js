import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {ItemCount} from './ItemCount'
import { AddToCart } from './AddToCart'
import { AddedToCart } from './AddedToCart'

export const Item = ( { id, name, price, img, stock, initial } ) => {

    let [count, setCount] = useState(initial)
    let [added, setAdded] = useState(false)

    const handleAdd = () => {
        
        if(count > 0){
            console.log('Item agregado:', {
                id,
                name,
                price,
                count
            })
            setAdded(true)}
            
        }
    

    return (
        <>
            <div className="card text-center shadow-2xl md:max-w-xs m-8 bg-base-200">
                <img src={img} className="rounded-xl rounded-b-none object-cover h-64 w-full" alt="img"/>
            <div className="card-body">
                <h2 className="card-title md:h-20">{name}</h2> 
                <p>${price}</p> 

                {!added
                ? <AddToCart 
                    stock={stock} 
                    initial={initial} 
                    count={count} 
                    setCount={setCount} 
                    handleAdd={handleAdd}/>
                : <AddedToCart/>}
                
                <Link to={`/services/detail/${id}`} className='btn btn-outline btn-sm'>Detalles</Link>
            </div>
            </div> 
        </>
    )
}

