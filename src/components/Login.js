import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {useAuth} from "./auth"
function Login()
{
    const [user, setUser] = React.useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    return (
        <div>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={
                ()=> {
                    auth.login(user)
                    navigate(redirectPath, {replace: true})
                }
            }>Login</button>
        </div>
    )
}
export default Login
