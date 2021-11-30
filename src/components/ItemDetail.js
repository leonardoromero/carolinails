import React, {useState} from 'react'
import {ItemCount} from './ItemCount'
import {AddToCart} from './AddToCart'
import {AddedToCart} from './AddedToCart'

export const ItemDetail = ( { id, name, desc, price, img, stock, initial, category } ) => {

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
            setAdded(true)
        }

    }

    return (
        <div className="flex justify-center bg-primaryFocus">
            <div className="card text-center shadow-2xl md:max-w-md m-8 bg-base-200">
                <img src={img} className="rounded-xl rounded-b-none object-cover h-100 w-full" alt="img"/>
                <div className="card-body">
                    <h2 className="card-title md:h-14">{name}</h2> 
                    <p>{desc}</p> 
                    <p>${price}</p>
                </div>
                {!added
                ? <AddToCart 
                    stock={stock} 
                    initial={initial} 
                    count={count} 
                    setCount={setCount} 
                    handleAdd={handleAdd}/>
                : <AddedToCart/>}
            </div> 
        </div>
    )
}
