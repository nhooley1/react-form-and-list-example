import './App.css';
import { React, useState } from 'react';
import UserList from './Components/Users/UserList';
import AddUserForm from './Components/Form/AddUserForm';

function App() {
  const USER_LIST = [
    {
      id: 'u1',
      name: 'Nicholas Hooley',
      age: 31,
    },
    {
      id: 'u2',
      name: 'Olivera Rajkovic',
      age: 30,
    },
  ];

  const [users, setUsers] = useState(USER_LIST);

  const addUserToList = user => {
    const newUser = { id: Math.random().toString(), ...user };
    setUsers(prevUsers => {
      return [newUser, ...prevUsers];
    });
    console.log(users);
  };

  return (
    <div className="App">
      <AddUserForm onSubmit={addUserToList} />
      <UserList userList={users} />
    </div>
  );
}

export default App;
