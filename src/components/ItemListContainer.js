import {useEffect, useState} from 'react'
import { ItemList } from './ItemList'
import { Loading } from './Loading'
import { NotFound } from './NotFound'
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])
    const [categoryExists, setCategoryExists] = useState(false)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)

        const servicesRef = collection(db, 'services')

        getDocs(servicesRef)
         .then((res) => {
             const categories = res.docs.map((doc) => doc.data().category)
             categories.includes(category) && setCategoryExists(true)
         })
        
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
        <div className="flex justify-center bg-primaryFocus p-5">
            {loading 
                ? <Loading/> 
                : categoryExists 
                    ? <ItemList services={services}/>
                    : <NotFound product={true}/>
            }
        </div>
        
    )
}
