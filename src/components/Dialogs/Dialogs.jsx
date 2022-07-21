import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div classname={s.dialog + '' + s.active}>
                    Dimych
                </div>
                <div classname={s.dialog}>
                    Andrey
                </div>
                <div classname={s.dialog}>
                    Sveta
                </div>
                <div classname={s.dialog}>
                    Sasha
                </div>
                <div classname={s.dialog}>
                    Viktor
                </div>
                <div classname={s.dialog}>
                    Valera
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra? </div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;