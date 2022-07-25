import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div classname={s.dialogItems + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;
