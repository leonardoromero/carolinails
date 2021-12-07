import React, {useEffect, useState} from 'react'
import { Loading } from './Loading'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [service, setService] = useState()
    const { serviceId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'services', serviceId)

        getDoc(docRef)
            .then((doc) => {
                console.log(doc)
                setService({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [serviceId])
    

    return (
        <div className="flex justify-center bg-primaryFocus">
            {loading 
                ? <Loading/> 
                : <ItemDetail {...service}/>}
        </div>
    )
}
