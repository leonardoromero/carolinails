import React, {useEffect, useState} from 'react'
import { ItemList } from './ItemList'
import { getData } from '../helpers/getData.js'
import { Loading } from './Loading'
import { useParams } from 'react-router'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
        .then((response) => {
            if(!category){
                setServices(response)   
            } else {
                setServices(response.filter ( service => service.category === category))
            }
            
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [category])
    

    return (
        <div className="flex justify-center bg-primaryFocus">
            {loading 
                ? <Loading/> 
                : <ItemList services={services}/>}
        </div>
    )
}
