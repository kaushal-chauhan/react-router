import { Navigate, useLocation } from "react-router-dom"
import {useAuth} from "./auth"
export const Authenticated = (props) => {
    const auth = useAuth()
    const location = useLocation()
    if (!auth.user) {
        console.log(location.pathname)
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
    return props.children
}
