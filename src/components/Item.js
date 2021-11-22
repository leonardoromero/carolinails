import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const Item = ( { id, name, desc, price, img, stock, initial } ) => {

    let [count, setCount] = useState(initial)

    const add = () => {setCount(count+1)}
    const substract = () => {setCount(count-1)}

    return (
        <>
            <div className="card text-center shadow-2xl md:max-w-xs m-8 bg-base-200">
                <img src={img} className="rounded-xl rounded-b-none object-cover h-64 w-full" alt="img"/>
            <div className="card-body">
                <h2 className="card-title md:h-14">{name}</h2> 
                <p>{desc}</p> 
                <div className="justify-center card-actions">
                    <div className="btn-group py-4">
                        <button className={count <= 0 ? "btn btn-outline btn-sm btn-disabled" : "btn btn-outline btn-sm" } onClick={substract}>-</button> 
                        <button className="btn btn-outline btn-sm px-10 btn-disabled">{stock === 0 ? stock : count}</button> 
                        <button className={count >= stock ? "btn btn-outline btn-sm btn-disabled" : "btn btn-outline btn-sm" } onClick={add}>+</button> 
                    </div> 
                </div>
                <div>
                    {stock === 0 ?
                        <p className={stock === 0 ? "text-center text-gray-400" : "hidden"}>Stock insuficiente</p> :
                        <Link to={`/services/detail/${id}`} className='btn btn-sm'>Detalles</Link>
                    }
                </div>
            </div>
            </div> 
        </>
    )
}

