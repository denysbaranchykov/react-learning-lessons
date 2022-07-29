import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />);
    const messagesElements = props.state.messages.map(m =>
        <Message message={m.message} />);



    // let newMessageElement = React.createRef();
    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text)
    // }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>




            {/* <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
 */}




        </div>
    )
}

export default Dialogs;
