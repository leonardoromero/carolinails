import basico from '../img/square/esmaltado-semi.jpg'
import kapping from '../img/square/kapping-niv.jpg'
import esculpidas from '../img/square/esculpido-acrilico-y-semi-2.jpg'
import service from '../img/square/nails.jpg'
import { Link } from 'react-router-dom'

export const Preview = () => {
    return (
        <section className="container rounded-2xl w-11/12 mx-auto mb-10">
                <div className="flex flex-wrap justify-center">
                    <Link to="/services/basico" className="m-3">
                        <div className="card text-center shadow-2xl w-1/3 md:w-56 bg-primaryBg">
                            <figure>
                                <img src={basico} alt="previsualización servicio básico"/>
                            </figure> 
                            <div className="card-body">
                                <h2 className="card-title">Básico</h2> 
                            </div>
                        </div>
                    </Link>
                    <Link to="/services/kapping" className="m-3">
                        <div className="card text-center shadow-2xl w-1/3 md:w-56 bg-primaryBg">
                            <figure>
                                <img src={kapping} alt="previsualización servicio kapping"/>
                            </figure> 
                            <div className="card-body">
                                <h2 className="card-title">Kapping</h2> 
                            </div>
                        </div> 
                    </Link>
                    <Link to="/services/esculpidas" className="m-3">
                        <div className="card text-center shadow-2xl w-1/3 md:w-56 bg-primaryBg">
                            <figure>
                                <img src={esculpidas} alt="previsualización servicio exculpidas"/>
                            </figure> 
                            <div className="card-body">
                                <h2 className="card-title">Esculpidas</h2> 
                            </div>
                        </div> 
                    </Link>
                    <Link to="/services/service" className="m-3">
                        <div className="card text-center shadow-2xl w-1/3 md:w-56 bg-primaryBg">
                            <figure>
                                <img src={service} alt="previsualización servicio service"/>
                            </figure> 
                            <div className="card-body">
                                <h2 className="card-title">Service</h2> 
                            </div>
                        </div> 
                    </Link>
                </div>
        </section>
    )
}
