
export const CartCard = ( {name, img, price, id, count, removeFromCart} ) => {
    return (
        <article className="card lg:card-side border-2 my-2">
            <figure>
                <img src={img} alt={name} NameName="object-cover h-64"/>
            </figure> 
            <div className="card-body">
                <div className="card-info flex justify-between">
                    <h2 className="card-title">{name} ${price} x{count}</h2> 
                    <h3 className="font-bold text-2xl">${price * count}</h3>
                </div>
                
                <div className="card-actions">
                    <button className="btn btn-warning btn-sm" onClick={() => removeFromCart(id)}>Eliminar del carrito</button> 
                </div>
            </div>
        </article> 
    )
}
