import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import s from './style.module.sass'

export default function Button(props) {
    return (
        <button
            className={s.btn}
            {...props}>
            <CloseCircleOutlined />
        </button>
    )
}
