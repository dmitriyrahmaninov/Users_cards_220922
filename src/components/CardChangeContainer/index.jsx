import React from 'react';
import CardUser from '../CardUser';
import CardEdit from "../CardEdit";
import { useState } from "react";


export default function CardChangeContainer({ user, deleteCard, addEditCard }) {

    const [editing, setEditing] = useState(false);
    
    const changeEditing = () => setEditing(!editing);

    return (
        <>
            
            {editing
                ? <CardEdit {...user} changeEditing={changeEditing} addEditCard={addEditCard} /> 
                : <CardUser {...user} deleteCard={deleteCard} changeEditing={changeEditing}/> 
                }
            
        </> 
    )
}
