export const NavBar = () => {
    return (
        <div className="navbar mb-2 shadow-lg bg-pink-300 text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
      </button>
        <span className="text-xl font-bold ml-3">
                CaroliNails
              </span>
      </div> 
      <div className="hidden px-2 mx-2 navbar-end lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn mx-5 text-base" href="/#">
                  Home
                </a> 
          <a className="btn btn-ghost btn-sm rounded-btn mx-5 text-base" href="/#">
                  Galería
                </a> 
          <a className="btn btn-ghost btn-sm rounded-btn mx-5 text-base" href="/#">
                  Contacto
                </a> 
          <a className="btn bg-red-500 border-white hover:bg-red-700 btn-sm hover:border-white rounded-btn mx-5 text-base" href="/#">
                  Agendate!
                </a>
        </div>
      </div> 
    </div>
    )
};