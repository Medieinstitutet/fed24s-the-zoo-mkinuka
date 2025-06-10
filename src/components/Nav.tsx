import { NavLink } from "react-router-dom"

export const Nav = () => {
    
    return <>
    <nav className="Nav">
    <ul>
        <li className="navItem">
            <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
            <NavLink to="/Animals">Visit the Zoo</NavLink>
        </li>
    </ul>
    </nav>
    </>
}