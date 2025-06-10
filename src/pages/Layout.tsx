import { Outlet } from "react-router-dom"
import { Nav } from "../components/Nav"
import "../styles/Layout.css"
export const Layout = () => {

    return <>
        <header>
            <Nav/>
        </header>
        <main className="main-container">
            <Outlet/>
        </main>
        <footer></footer>
    </>
}