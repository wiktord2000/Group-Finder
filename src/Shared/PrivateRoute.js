import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../Providers/AuthContext'

export default function PrivateRoute ({children}){
    
    const { currentUser } = useAuthContext();
    
    return currentUser ? children : <Navigate to="/login"/>;  
}