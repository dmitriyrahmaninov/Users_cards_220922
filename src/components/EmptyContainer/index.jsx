import React from 'react';
import s from './style.module.sass'

export default function EmptyContainer() {
    return (
        <div className={s.emptyCard}>
            <p>Нет зарегистрированных пользователей</p>
        </div>
    )
}
