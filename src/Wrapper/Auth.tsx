import React from 'react'
import { useAppSelector } from '../Hook'
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

const Auth = ({ children }: Props) => {
    const user = useAppSelector((state) => state.user)

    return user?.isLoggedIn ? <>{children}</> : <Navigate to="/" />
}

export default Auth
