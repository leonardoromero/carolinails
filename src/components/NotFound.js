import { Link, useNavigate } from 'react-router-dom'

export const NotFound = ( { product = false } ) => {

    const navigate = useNavigate()

    const handlePreviousPage = () => {
        navigate(-1)
    }

    return (
        <div class="hero min-h-screen bg-primaryBg">
            <div class="text-center hero-content">
                <div class="max-w-md">
                    {!product
                        ? <>
                            <h1 class="mb-5 text-5xl font-bold">Página no encontrada!</h1> 
                            <p class="mb-5">Parece que la página que estás buscando no existe.</p> 
                            </>
                        : <>
                            <h1 class="mb-5 text-5xl font-bold">Producto no encontrado!</h1> 
                            <p class="mb-5">Parece que el producto que estás buscando no existe.</p> 
                            </>
                    }
                    <div className="buttons flex justify-center">
                        <button onClick={handlePreviousPage} className="btn bg-primary border-white hover:bg-secondary hover:border-white">Ir atrás</button>
                        <Link to="/" className="btn btn-outline mx-5 border-primary text-primary hover:bg-primary hover:text-white hover:border-white">Ir al inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
