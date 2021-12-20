
export const ItemCount = ( {stock, count, setCount}) => {
    

    const add = () => {count < stock && setCount(count + 1)}
    const substract = () => {count > 0 && setCount(count - 1)}

    return (
        <div className="justify-center card-actions">
            <div className="btn-group py-2">
                <button className="btn btn-outline btn-sm" onClick={substract}>-</button> 
                <button className="btn btn-outline btn-sm px-10 btn-disabled">{stock === 0 ? stock : count}</button> 
                <button className="btn btn-outline btn-sm" onClick={add}>+</button> 
            </div> 
        </div>
    )
}
