import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice';

const Navbar = () => {
    const { email, name } = useSelector(selectUser)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className={s.wrapper}>
            <Link className={s.homeLink} to={'/'}>Redux | Auth</Link>
            <div>{email}</div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                {!isLoggedIn && (
                    <>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </>
                )}

            </nav>
        </div>
    );
}

export default Navbar;
