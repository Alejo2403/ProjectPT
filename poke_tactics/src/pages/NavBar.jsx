import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

const NavBar = () => {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu">
      <div className="logo bg-[var(--blue-pri)] justify-center flex items-center h-16">
        <img src="/LogoTCW.png" alt="Logo" className="h-14 sm:h-16 md:h-18"/>
        <button
          className="text-[var(--yellow-pri)] text-2xl font-bold md:hidden items-center justify-center ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      
      <div className={`
        flex flex-col gap-2 font-bold items-center justify-center
        md:flex-row md:gap-10 md:overflow-visible  
        text-[var(--yellow-pri)] bg-[var(--blue-sec)]
        overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-[500px] py-3" : "max-h-0 py-0"}
        md:max-h-none md:py-3
      `}>
        <Link onClick={() => setMenuOpen(false)} to="/" className={isActive('/') ? 'border-b-2 border-yellow-400' : ''}>Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="/pokedex" className={isActive('/pokedex') ? 'border-b-2 border-yellow-400' : ''}>Pokedex</Link>
        <Link onClick={() => setMenuOpen(false)} to="/gyms" className={isActive('/gyms') ? 'border-b-2 border-yellow-400' : ''}>Gyms</Link>
        <Link onClick={() => setMenuOpen(false)} to="/lab" className={isActive('/lab') ? 'border-b-2 border-yellow-400' : ''}>Laboratory</Link>
        <Link onClick={() => setMenuOpen(false)} to="/metas" className={isActive('/metas') ? 'border-b-2 border-yellow-400' : ''}>Metas</Link>
      </div>
    </div>
  )
}

export default NavBar