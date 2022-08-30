import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoutes = () => {
    let {currentUser} = useAuth()
    console.log(currentUser)
    return (
        currentUser ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes