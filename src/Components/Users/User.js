import React from 'react';

const User = props => {
  return (
    <li>
      <p>{props.name + props.age}</p>
    </li>
  );
};

export default User;
