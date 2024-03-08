import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/slice';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if (isLoggedIn) {
        return <Navigate to='/' replace={true} />
    }
    return children
}

export default PublicRoute;
