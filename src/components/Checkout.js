import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { dataValidation } from '../helpers/dataValidation'
import Swal from "sweetalert2"
import { db } from '../firebase/config'
import { collection, Timestamp, writeBatch, addDoc } from 'firebase/firestore/lite'
import { useNavigate } from 'react-router'


export const Checkout = () => {

    const inputStyle = 'form-control mt-2 border border-primaryFocus p-2 w-full rounded-lg focus:border-primary focus:outline-none'
    
    const batch = writeBatch(db)
    const orderRef = collection(db, 'orders')
    const navigate = useNavigate()

    const {cart, totalCart, deleteCart} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        phone2: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!dataValidation(values)) { return }

        const bill = {
            buyer: {...values},
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate( new Date() )
        }

        addDoc(orderRef, bill)
            .then((res) => {
                batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por tu compra!',
                    text: `${values.name}, tu compra de ${bill.items.map((item) => item.name).join(', ')} fue registrada con éxito bajo el identificador ${res.id}`,
                    footer: 'Redireccionando a la página principal'
                })  
                .then(() => {
                   deleteCart() 
                   navigate('/')

                })
                  
            })

        console.log(bill)
        console.log(cart)

    }

    return (
        <div className='rounded shadow-xl w-2/3 md:w-1/2 mx-auto m-4 p-4 border-2'>
            <h2 className='text-3xl font-bold mb-4 text-detail4'>Completá tus datos</h2>
            <hr/>
                <form className='pt-5 space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className=''>Nombre {(values.name.length !== 0 && values.name.length < 3) && <span className='text-gray-500  text-sm'>debe contener más de 3 letras</span>}</label>
                        <input 
                            className={inputStyle} 
                            type='text' 
                            value={values.name}
                            name="name"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <label className=''>Apellido {(values.lastName.length !== 0 && values.lastName.length < 4) && <span className='text-gray-500  text-sm'>debe contener más de 3 letras</span>}</label>
                        <input 
                            className={inputStyle} 
                            type='text' 
                            value={values.lastName}
                            name="lastName"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <label className=''>Teléfono {(values.phone.length !== 0 && values.phone.length !== 10) && <span className='text-gray-500  text-sm'>debe contener 10 números</span>}</label>
                        <input 
                            className={inputStyle} 
                            placeholder='Sólo números. Ej: 1190908080'
                            type='number' 
                            value={values.phone}
                            name="phone"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <label className=''>Repetí tu teléfono {(values.phone !== values.phone2) && <span className='text-gray-500  text-sm'>debe coincidir con el campo anterior!</span>}</label>
                        <input 
                            className={inputStyle} 
                            placeholder='Sólo números. Ej: 1190908080'
                            type='number' 
                            value={values.phone2}
                            name="phone2"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <button type='submit' className='btn bg-primary border-none w-full hover:bg-secondary'>Finalizar mi compra</button>
                </form>
        </div>
    )
}
