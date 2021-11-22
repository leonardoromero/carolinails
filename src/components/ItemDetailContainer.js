import React, {useEffect, useState} from 'react'
import { getData } from '../helpers/getData.js'
import { Loading } from './Loading'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [service, setService] = useState()
    const { serviceId } = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
        .then((response) => {
            setService(response.find( service => service.id === Number(serviceId)))
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    

    return (
        <div className="flex justify-center bg-primaryFocus">
            {loading 
                ? <Loading/> 
                : <ItemDetail {...service}/>}
        </div>
    )
}
