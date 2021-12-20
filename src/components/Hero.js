import { Link } from 'react-router-dom'
import Landing from '../img/landing.jpg'
import waves3 from '../img/waves-3.svg'

export const Hero = ( ) => {
    return (
        <>
            <div className="hero py-32 lg:py-64 bg-primaryBg" style={{ backgroundImage:`url(${waves3})` }}>
                <div className="flex-col hero-content lg:flex-row-reverse -mt-20">
                    <img src={Landing} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-5" alt="recién casada mostrando sus uñas hechas con Carolinails"/> 
                    <div className="md:mr-20">
                        <h1 className="mb-5 text-6xl font-bold text-center uppercase">nailart & studio</h1> 
                        <p className="mb-5 text-center text-lg lg:text-left">
                            Dejame mostrarte mi arte y agenda tu turno :)
                        </p> 
                        <Link to="/scheduling" className="btn btn-primary btn-md text-primaryBg border-transparent bg-primary hover:bg-primary hover:shadow-inner hover:border-transparent m-auto flex px-10 lg:ml-0">Agendate!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
