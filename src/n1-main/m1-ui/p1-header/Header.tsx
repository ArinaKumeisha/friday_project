import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import s from './Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {LogoutTC} from "../../m2-bll/authReducer";
import {AppStoreType} from "../../m2-bll/store";

export const Header = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(LogoutTC())
    }
    if (!isLoggedIn) {
        return <Redirect to='/login'/>
    }
    return (
        <div className={s.header}>
            <NavLink to={'/profile'}>
                <div className={s.logo}>Cards</div>
            </NavLink>
            {isLoggedIn ? <div className={s.links}>
                <NavLink className={s.item} to={'/table'}>Table</NavLink>
                <NavLink className={s.item} to={'/profile'}>Profile</NavLink>
                <a className={s.link} onClick={logout}>Log out</a>
            </div> : <div className={s.links}>
                <NavLink className={s.item} to={'/login'}>Login</NavLink>
                <NavLink className={s.item} to={'/registration'}>Registration</NavLink>
                <NavLink className={s.item} to={'/passwordrecovery'}>PasswordRecovery</NavLink>
            </div>}

        </div>
    );
}