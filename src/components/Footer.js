import { Link } from 'react-router-dom'
import ig from '../img/instagram.png'
import gm from '../img/google-maps-2.png'


export const Footer = () => {
    return (
        <>
            <footer className="md:p-10 py-10 footer bg-primary text-base-content footer-center bottom-0" >
                <div className="grid md:grid-flow-col gap-4">
                    <Link to="/" className="text-base hover:text-white hover:text-bold">Home</Link> 
                    <Link to="/services/basico" className="text-base hover:text-white hover:text-bold">Básico</Link> 
                    <Link to="/services/kapping" className="text-base hover:text-white hover:text-bold">Kapping</Link> 
                    <Link to="/services/esculpidas" className="text-base hover:text-white hover:text-bold">Esculpidas</Link> 
                    <Link to="/services/service" className="text-base hover:text-white hover:text-bold">Service</Link> 
                    <Link to="/scheduling" className="text-base hover:text-white hover:text-bold">Agendate!</Link> 
                </div> 
                <div>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/carolinails_bsas/">
                        <img src={ig} className="h-8 my-auto" alt="icono instagram"/>
                    </a> 
                    <a href="https://goo.gl/maps/Jxb1G9jWERTnLWR69">
                        <img src={gm} className="h-8 my-auto" alt="icono google maps"/>
                    </a> 
                    <p className="my-auto">Caseros, Buenos Aires</p>
                    </div>
                </div> 
                <div>
                    <p className="pb-5">Copyright © 2021 - Creado por Leo Romero </p>
                </div>
            </footer>
        </>
    )
}
