import {useNavigate} from "react-router-dom"

function ButtonLink() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("/")}>Home Page</button>
            <button onClick={() => navigate("about-us")}>About Us</button>
            <button onClick={() => navigate("contact-us")}>Contact Us</button>
            <button onClick={() => navigate("12312", {replace: true})}>404 Page</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
export default ButtonLink
