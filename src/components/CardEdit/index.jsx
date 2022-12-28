import React from 'react';
import s from './style.module.sass'

export default function CardEdit({id, name, avatar, gender, changeEditing, addEditCard }) {

    const submit = event => {
        event.preventDefault();
        const { name_user, gender_user, link_avatar } = event.target;
        addEditCard(id, name_user.value, gender_user.value, link_avatar.value);
        changeEditing();
    }

    return (
        <form className={s.form} onSubmit={submit}>
                <input required type="text" placeholder='Имя' name='name_user' defaultValue={name}/>
                <input required type="text" placeholder='Ссылка на аватарку' name="link_avatar" defaultValue={avatar}/>
            <select required className={s.gender_input} name="gender_user" defaultValue={gender} >
                <option value="" disabled hidden>Пол</option>
                <option value='1'>Мужчина</option>
                <option value='2'>Женщина</option>
            </select>
            <button>Изменить пользователя</button>
        </form>
    )
}
