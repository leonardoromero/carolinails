import React from 'react'
import { Item } from './Item'

export const ItemList = ( {services} ) => {

    return (
        <div className='flex flex-wrap justify-center '>
            {services.map((service) => <Item key={service.id} {...service}/> )}
        </div>
    )
}
