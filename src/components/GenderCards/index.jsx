import React from 'react';
import s from './style.module.sass';
import { genderLabels } from './genderLabels';
import CardChangeContainer from '../CardChangeContainer'
import Button from '../UI/Button';


export default function GenderCards({ users, gender, deleteCard, deleteGender, addEditCard }) {   

    return (
        <div className={s.cardsContainer}>
            <p>{genderLabels[gender]}</p>
            <div className={s.cards}>
            {
                users.map(user =>
                    <CardChangeContainer
                        key={user.id}
                        user={user}
                        deleteCard={deleteCard}
                        addEditCard={addEditCard}
                />)
                }
            </div>
            <div className={s.close_btn}>
                <Button onClick={() => deleteGender(gender)} />
            </div> 
        </div>
    )
}
