import React, {useState} from 'react'

export const ItemCount = ( { stock, initial } ) => {

    let [count, setCount] = useState(initial)

    const add = () => {setCount(count+1)}
    const substract = () => {setCount(count-1)}

    return (
        <>
            <div className="card text-center shadow-2xl md:max-w-xs m-8 bg-base-200 mb-40">
            <figure className="">
                <img src="https://picsum.photos/id/1005/400/250" className="rounded-xl rounded-b-none" alt="img"/>
            </figure> 
            <div className="card-body">
                <h2 className="card-title">Lorem Ipsum</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
                <div className="justify-center card-actions">
                    <div className="btn-group py-4">
                        <button className={count <= 0 ? "btn btn-outline btn-md btn-disabled" : "btn btn-outline btn-md" } onClick={substract}>-</button> 
                        <button className="btn btn-outline btn-md px-10 btn-disabled">{stock === 0 ? stock : count}</button> 
                        <button className={count >= stock ? "btn btn-outline btn-md btn-disabled" : "btn btn-outline btn-md" } onClick={add}>+</button> 
                    </div>
                    
                </div>
            <p className={stock === 0 ? "text-center text-gray-400" : "hidden"}>Stock insuficiente</p>
            </div>
            </div> 
        </>
    )
}

ItemCount.defaultProps = {
    stock: 0,
    initial: 0
}
