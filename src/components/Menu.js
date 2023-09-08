import {Link, NavLink} from "react-router-dom"
import {useAuth} from "./auth"

function Menu() {
    console.log("Menu")
    const auth = useAuth()
    const activeLink = ({ isActive }) => {
        return isActive ? {color: 'orange', fontWeight: 'bold'} : {}
    }
    return (
        <>
            <nav>
                {/* <Link to="/">Home Page</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link> */}
                <NavLink style={activeLink} to="/">Home Page</NavLink>
                <NavLink style={activeLink} to="/about-us">About Us</NavLink>
                <NavLink style={activeLink} to="/contact-us">Contact Us</NavLink>
                <NavLink style={activeLink} to="/products">Products</NavLink>
                { !auth.user && <NavLink style={activeLink} to="/login">Login</NavLink>}
                { auth.user && <NavLink style={activeLink} to="/logout">Logout</NavLink>}
            </nav>
            { auth.user && <span>{auth.user}</span>}
        </>
    )
}
export default Menu
