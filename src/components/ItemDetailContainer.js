import {useEffect, useState} from 'react'
import { Loading } from './Loading'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { doc, getDoc, getDocs, collection } from 'firebase/firestore/lite'
import { db } from '../firebase/config'
import { NotFound } from './NotFound'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [service, setService] = useState()
    const [idExists, setidExists] = useState(false)

    const { serviceId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "services", serviceId)
        const servicesRef = collection(db, "services")

        getDocs(servicesRef)
         .then((res) => {
             const ids = res.docs.map((doc) => doc.id)
             ids.includes(serviceId) && setidExists(true)
         })

        getDoc(docRef)
            .then((doc) => {
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
                : idExists 
                    ? <ItemDetail {...service}/>
                    : <NotFound product={true}/>
            }
        </div>
    )
}
