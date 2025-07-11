import { Link, useLocation } from "react-router-dom";
import appFirebase from '../credentials'
import {getAuth,signOut} from  'firebase/auth'
const auth = getAuth(appFirebase)


const NavBar = () => {

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu">
      <div className="logo bg-[var(--blue-pri)] justify-center flex items-center h-16">
        <img src="/src/assets/images/LogoTCW.png" alt="Logo" className="h-18"/>
      </div>
      <nav className="navs flex justify-center items-center gap-10 font-bold text-[var(--yellow-pri)] bg-[var(--blue-sec)] py-3">
        <Link to="/" className={isActive('/') ? 'border-b-2 border-yellow-400' : ''}>Home</Link>
        <Link to="/pokedex" className={isActive('/pokedex') ? 'border-b-2 border-yellow-400' : ''}>Pokedex</Link>
        <Link to="/gyms" className={isActive('/gyms') ? 'border-b-2 border-yellow-400' : ''}>Gyms</Link>
        <Link to="/lab" className={isActive('/lab') ? 'border-b-2 border-yellow-400' : ''}>Laboratory</Link>
        <Link to="/metas" className={isActive('/metas') ? 'border-b-2 border-yellow-400' : ''}>Metas</Link>
      </nav>
      <div className="flex end-4"><button onClick={()=>signOut(auth)}>Log Out</button></div>
    </div>
  )
}

export default NavBar