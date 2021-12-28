import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>Rusik</div>
                    <div className={s.dialog}>Danya</div>
                    <div className={s.dialog}>Lemur</div>
                </div>
                <div className={s.dialogsMessages}>
                    <div className={s.message}>ahaaha</div>
                    <div className={s.message}>ahahahah</div>
                    <div className={s.message}>ahahahah</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;