import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../img/logo.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => {

    const linkStyle = "hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base"
    const [mobileNav, setMobileNav] = useState("hidden")

    const handleNavbar = () => mobileNav === "hidden" ? setMobileNav("") : setMobileNav("hidden")

    return (
        <>
          {/* Desktop navbar */}

          <nav className="navbar shadow-lg bg-primaryBg text-neutral-content sticky top-0 z-10 opacity-95">
            <div className="px-2 mx-2 navbar-start">
              <button onClick={handleNavbar} className="btn btn-sm btn-square text-primary bg-primaryBg border-primaryBg hover:text-primaryBg hover:bg-primary hover: border-none lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>               
                </svg>
              </button>
              <Link to="/"><img src={Logo} alt="logo" className="h-10 md:h-16"/></Link>
            </div> 
            <div className="px-2 mx-2 navbar-end lg:flex">
              <div className="flex items-stretch">
                <NavLink className={linkStyle} to="/">Inicio</NavLink>
                <NavLink className={linkStyle} to="services/basico">Básico</NavLink>
                <NavLink className={linkStyle} to="services/kapping">Kapping</NavLink>
                <NavLink className={linkStyle} to="services/esculpidas">Esculpidas</NavLink>
                <NavLink className={linkStyle} to="services/service">Service</NavLink>
                <Link 
                  to="/scheduling" 
                  className="btn btn-sm md:btn-md my-auto text-xs md:text-base bg-primary border-transparent text-primaryBg hover:bg-primary hover:border-transparent hover:shadow-inner rounded-btn mx-5">
                  Agendate!
                </Link>
                <Link to="cart"><CartWidget/></Link>
              </div>
            </div> 
          </nav>
          
          {/* Mobile navbar */}

          <div className={`bg-primaryFocus shadow-lg sticky top-16 z-10 opacity-95 ${mobileNav}`}>
            <Link 
              onClick={handleNavbar} 
              className="w-full inline-block text-center my-2 text-lg hover:text-white hover:font-bold" 
              to="/">
              Inicio
            </Link>
            <Link 
              onClick={handleNavbar} 
              className="w-full inline-block text-center my-2 text-lg hover:text-white hover:font-bold" 
              to="services/basico">
              Básico
            </Link>
            <Link 
              onClick={handleNavbar} 
              className="w-full inline-block text-center my-2 text-lg hover:text-white hover:font-bold" 
              to="services/kapping">
              Kapping
            </Link>
            <Link 
              onClick={handleNavbar} 
              className="w-full inline-block text-center my-2 text-lg hover:text-white hover:font-bold" 
              to="services/esculpidas">
              Esculpidas
            </Link>
            <Link 
              onClick={handleNavbar} 
              className="w-full inline-block text-center my-2 text-lg hover:text-white hover:font-bold" 
              to="services/service">
              Service
            </Link>
          </div>
        </>
    )
};