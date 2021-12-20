import bg from '../img/watercolor.png'
import { Link, useNavigate } from 'react-router-dom'

export const Scheduling = () => {

    const navigate = useNavigate()

    const handlePreviousPage = () => {
        navigate(-1)
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${bg})` }}>
            <div className="hero-overlay bg-opacity-40"></div> 
            <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">Próximamente</h1>   
                <h2 className="text-2xl mb-5 text-center w-full"> podrás agendar tus turnos directamente desde la página!</h2>
                <div className="buttons flex justify-center">
                    <button onClick={handlePreviousPage} className="btn bg-primary border-white hover:bg-secondary hover:border-white">Ir atrás</button>
                    <Link to="/" className="btn btn-outline mx-5 border-white text-white hover:bg-primary hover:border-white">Ir al inicio</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
