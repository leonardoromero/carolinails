import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = () => {


    return (
        <div className="flex justify-center">
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}
