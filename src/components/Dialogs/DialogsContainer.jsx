import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;
            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
