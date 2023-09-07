import {Link, NavLink} from "react-router-dom"

function Menu() {
    console.log("Menu")
    const activeLink = ({ isActive }) => {
        return isActive ? {color: 'orange', fontWeight: 'bold'} : {}
    }
    return (
        <nav>
            {/* <Link to="/">Home Page</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link> */}
            <NavLink style={activeLink} to="/">Home Page</NavLink>
            <NavLink style={activeLink} to="/about-us">About Us</NavLink>
            <NavLink style={activeLink} to="/contact-us">Contact Us</NavLink>
        </nav>
    )
}
export default Menu
