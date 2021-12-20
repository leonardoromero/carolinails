import Caro from "../img/caro.jpg"
import footer from "../img/footer.svg"

export const About = () => {
    return (
        <section className="hero py-64 pt-10 bg-primaryFocus" style={{ backgroundImage:`url(${footer})` }}>
            <div className="flex-col hero-content lg:flex-row-reverse ">
                <div className="md:px-12 px-6">
                    <h1 className="mb-10 text-6xl font-bold">
                        Soy Caro
                    </h1> 
                    <p className="mb-5 text-lg">
                        Carolinails es el fruto del emprendedurismo y el esfuerzo, y reflejo del amor por lo que hago junto con la pasión por volcar mi arte en tus manos. Día a día me propongo el objetivo de dejar a cada una de mis clientas contentas y con ganas de volver, de salir al mundo empoderadas y bellas.
                    </p> 
                    <p className="mb-5 text-lg">
                        Te invito a seguirme en <a href="https://www.instagram.com/carolinails_bsas/" className="text-detail4 hover:text-primary font-bold">Instagram</a> para estar al tanto de promociones y sorteos. También podrás ver mi trabajo y diseños! 
                    </p> 
                </div>
                <img src={Caro} className="max-w-xs rounded-lg shadow-2xl" alt="Carolina, creadora de Carolinails"/> 
            </div>
        </section>
    )
}
