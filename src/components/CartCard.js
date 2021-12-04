import React from 'react'

export const CartCard = ( {name, img, price, id, count, removeFromCart} ) => {
    return (
        <div class="card lg:card-side border-2 my-2">
            <figure>
                <img src={img} alt={name} className="object-cover h-64"/>
            </figure> 
            <div class="card-body">
                <div className="card-info flex justify-between">
                    <h2 class="card-title">{name} ${price} x{count}</h2> 
                    <h3 className="font-bold text-2xl">${price * count}</h3>
                </div>
                
                <div class="card-actions">
                    <button class="btn btn-warning btn-sm" onClick={() => removeFromCart(id)}>Eliminar del carrito</button> 
                </div>
            </div>
        </div> 
    )
}
