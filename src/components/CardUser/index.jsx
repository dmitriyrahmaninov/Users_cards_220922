import React from 'react';
import Button from '../UI/Button';
import s from './style.module.sass'

export default function CardUser({ id, name, avatar, deleteCard, changeEditing }) {
    return (
        <div className={s.container}>
        <div className={s.usersCard} onDoubleClick={changeEditing}>
            <img src={avatar} alt="avatar"/>
            <p>{name}</p>
            <div className={s.close_btn} >
                <Button onClick={()=> deleteCard(id)}/>
            </div>
        </div>
            <div className={s.tooltip}>
                <span className={s.tooltiptext}>Кликни дважды, чтобы отредактировать карточку</span>
            </div>
    </div>
            )
}
