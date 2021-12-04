import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <div className="navbar shadow-lg bg-primaryBg text-neutral-content sticky top-0 z-10 opacity-95">
          <div className="px-2 mx-2 navbar-start">
            <button className="btn btn-square text-primary bg-primaryBg border-primaryBg hover:text-primaryBg hover:bg-primary hover: border-none lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
              <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>               
            </svg>
          </button>
            <Link to="/"><img src={Logo} alt="logo" className='h-20'/></Link>
          </div> 
          <div className="px-2 mx-2 navbar-end lg:flex">
            <div className="flex items-stretch">
                <Link className="hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base" to="/">Inicio</Link>
                <Link className="hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base" to="services/basico">Básico</Link>
                <Link className="hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base" to="services/kapping">Kapping</Link>
                <Link className="hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base" to="services/esculpidas">Esculpidas</Link>
                <Link className="hidden lg:flex btn text-detail4 bg-primaryBg border-primaryBg hover:text-primary hover:bg-primaryBg hover:border-transparent mx-5 text-base" to="services/service">Service</Link>
              <a className="btn bg-primary border-transparent text-primaryBg hover:bg-primary hover:border-transparent hover:shadow-inner rounded-btn mx-5 text-base" href="/#">
                      Agendate!
              </a>
              <Link to="cart"><CartWidget/></Link>
            </div>
          </div> 
        </div>
    )
};