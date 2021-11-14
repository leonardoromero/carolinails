import React from 'react'
import Landing from '../img/landing.jpg'

export const Hero = ( {greeting} ) => {
    return (
        <>
            <div className="hero py-32 bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse -mt-20">
                    <img src={Landing} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" alt='recién casada mostrando sus uñas'/> 
                    <div>
                    <h1 className="mb-5 text-5xl font-bold text-center">Bienvenidx a mi página web :)</h1> 
                    <p className="mb-5 text-center lg:text-left">
                            Dejame mostrarte mi arte y agenda tu turno :)
                        </p> 
                    <button className="btn btn-primary text-white border-white bg-red-500 m-auto flex px-10 lg:ml-0">Agendate!</button>
                    </div>
                </div>
            </div>
        </>
    )
}
