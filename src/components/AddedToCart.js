import { Link } from 'react-router-dom'

export const AddedToCart = () => {
    return (
        
        <div className='addedToCart'>
            <div className='mt-8 mb-6'>
                <p className="text-success font-bold">¡Añadido al carrito!</p>
            </div>
            <Link to='/cart' className='btn btn-sm btn-success mb-3 w-60'>
                Terminar mi compra
            </Link>
        </div>
    )
}
