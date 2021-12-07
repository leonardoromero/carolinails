import React, {useEffect, useState} from 'react'
import { ItemList } from './ItemList'
import { Loading } from './Loading'
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)

        const servicesRef = collection(db, 'services')
        const q = category ? query(servicesRef, where('category', '==', category)) : servicesRef

        getDocs(q)
            .then((res) => {
                const items = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setServices(items)
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
