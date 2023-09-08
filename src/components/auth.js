import React from "react"

const AuthContext = React.createContext(null)
export const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null)

    const login = (user) => setUser(user)

    const logout = (user) => setUser(null)

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {props.children}
        </AuthContext.Provider>
      )
}
export const useAuth = () => {
    return React.useContext(AuthContext)
}
  