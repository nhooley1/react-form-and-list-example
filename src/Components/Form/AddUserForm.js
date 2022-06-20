import { React, useState } from 'react';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import classes from './AddUserForm.module.css';

const AddUserForm = props => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState();

  const nameInputHandler = event => {
    setName(event.target.value);
  };

  const ageInputHandler = event => {
    setAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      console.log('failed validation! 1');
      setError({
        title: 'Error',
        message: 'An error has occurred',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Error',
        message: 'An error has occurred',
      });
      return;
    }

    const userData = {
      name: name,
      age: age,
    };

    console.log('this is userdata' + userData);

    props.onSubmit(userData);
    setAge('');
    setName('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input type="text" onChange={nameInputHandler} value={name} />
          </div>
          <div>
            <label>Age</label>
            <input type="number" onChange={ageInputHandler} value={age} />
          </div>
          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
