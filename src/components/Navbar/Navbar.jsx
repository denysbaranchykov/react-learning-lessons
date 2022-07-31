import { Link, NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeclassname={s.activeLink}> Profile </NavLink>
    </div>
    <div className={`${s.item} ${s.activeLink}`}>
      <NavLink to='/dialogs' activeclassname={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/News' activeclassname={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/Music' activeclassname={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/Settings' activeclassname={s.activeLink}>Settings</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/Friends' activeclassname={s.activeLink}>My friends</NavLink>
    </div>
  </nav>;
}

export default Navbar;