import {useAuth} from "./auth"
import { useNavigate } from "react-router-dom"
function Logout()
{
    const auth = useAuth()
    const navigate = useNavigate()
    return <button onClick={() => {
        auth.logout()
        navigate('/')
    }}>Logout</button>
}
export default Logout
