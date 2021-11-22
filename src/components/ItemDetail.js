import React from 'react'

export const ItemDetail = ( { name, desc, price, img, stock, initial, category } ) => {
    return (
        <div className="flex justify-center bg-primaryFocus">
            <div className="card text-center shadow-2xl md:max-w-md m-8 bg-base-200">
                <img src={img} className="rounded-xl rounded-b-none object-cover h-100 w-full" alt="img"/>
            <div className="card-body">
                <h2 className="card-title md:h-14">{name}</h2> 
                <p>{desc}</p> 
                <p>${price}</p>
            </div>
            
            </div> 
        </div>
    )
}
