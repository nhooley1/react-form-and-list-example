import React from 'react';
import User from './User';
import Card from '../../UI/Card';
import classes from './UserList.module.css';

const UserList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user, index) => (
          <User name={user.name} age={user.age} key={index} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
