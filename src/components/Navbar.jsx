import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <Link className={s.homeLink} to={'/'}>Redux | Auth</Link>
            <div>example@mail.com</div>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
                <NavLink to='/register'>
                    Register
                </NavLink>
                <NavLink to='/login'>
                    Login
                </NavLink>

            </nav>
        </div>
    );
}

export default Navbar;
