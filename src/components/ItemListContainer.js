import React, {useEffect, useState} from 'react'
import { ItemList } from './ItemList'
import { getData } from '../helpers/getData.js'
import { Loading } from './Loading'
import footer from '../img/footer.svg'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() => {
        setLoading(true)

        getData()
        .then((response) => {
            setServices(response)
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
            {loading ? <Loading/> : <ItemList services={services}/>}
        </div>
    )
}
