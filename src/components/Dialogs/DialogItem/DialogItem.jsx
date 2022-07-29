import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div classname={s.dialogItems + ' ' + s.active}> <img src='https://static7.depositphotos.com/1000422/765/v/600/depositphotos_7655796-stock-illustration-emoticon.jpg' width='20' height='20' />
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;
