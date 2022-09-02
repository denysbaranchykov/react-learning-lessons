import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' />
    <div className={s.loginBlock}>
        {props.isAuth
            ? <div> {props.login} <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'} >Login</NavLink>}
    </div>
  </header>;
}

export default Header;
