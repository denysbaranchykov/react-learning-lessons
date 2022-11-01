import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://static.vecteezy.com/system/resources/previews/008/653/795/non_2x/funny-funky-monkey-line-pop-art-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login}
                    <button onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;
