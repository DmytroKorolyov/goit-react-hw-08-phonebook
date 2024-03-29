import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/slice';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if (isLoggedIn) {
        return children
    }
    return <Navigate state={{from: location}} to='/login' />
}

export default PrivateRoute;
