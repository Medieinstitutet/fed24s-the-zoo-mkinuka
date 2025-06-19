import { NavLink } from "react-router-dom"
import "../styles/Nav.css"
import logo from "../assets/Nordiska.png"

export const Nav = () => {
    
    return <>
    <nav className="Nav w-[100vw]">
    <img src={logo} alt="Logo" className=" logo"/>
    <ul className="nav-links list-style w-[50vw]">
        <li className="NavItem">
            <NavLink  to="/">Hem</NavLink>
        </li>
        <li className="NavItem">
            <NavLink to="/Animals">Besök våra djur</NavLink>
        </li>
    </ul>
    </nav>
    </>
}