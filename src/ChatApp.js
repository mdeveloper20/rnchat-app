import React, {useState} from 'react';
import Login from './Login';
import Users from './Users';

const defaultUsers = [
  {id: 1, name: 'Alex', avatar: 'https://placeimg.com/140/140/any'},
  {id: 2, name: 'Sara', avatar: 'https://placeimg.com/140/140/any'},
  {id: 3, name: 'Michael', avatar: 'https://placeimg.com/140/140/any'},
];
export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState('users');
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [userToAdd, setUserToAdd] = useState(null);

  const onLogin = () => {};
  const onClickUser = () => {};
  const onAddUser = () => {};

  switch (currentPage) {
    case 'login':
      return <Login username={username} setUsername={setUsername} />;
    case 'users':
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
        />
      );
    default:
      return null;
  }
}
