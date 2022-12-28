import { useState, useEffect } from "react";
import AddUsers from "../AddUsers";
import CardContainer from "../CardContainer";


function App() {
  const [users, _setUsers] = useState([]);

  const setUsers = (state) => {
    _setUsers(state);
    localStorage.setItem('users', JSON.stringify(state));
  }

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) ?? [];
    setUsers(users);
  }, []);

  const addUsersCard = (name_user, gender_user, link_avatar) => {
    setUsers([...users,
    {
      id: Date.now(),
      name: name_user,
      gender: gender_user,
      avatar: link_avatar
    }
    ])
  }

  const addEditCard = (id, name_user, gender_user, link_avatar) =>
    setUsers(users.map(user => user.id === id
      ? { ...user, name: name_user, gender: gender_user, avatar: link_avatar }
      : user
    ));
  
  
  
  const deleteCard = (id) => setUsers(users.filter(user => user.id !== id));

  const deleteGender = (gender) => setUsers(users.filter(user => user.gender !== gender))
  
  return (
    <>
      <AddUsers addUsersCard={addUsersCard}/>
      <CardContainer
        users={users}
        deleteCard={deleteCard}
        deleteGender={deleteGender}
        addEditCard={addEditCard} />
    </>
  );
}

export default App;
