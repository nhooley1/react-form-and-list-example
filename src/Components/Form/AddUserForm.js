import { React, useState, useRef } from 'react';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import classes from './AddUserForm.module.css';

const AddUserForm = props => {
  const nameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const submitHandler = event => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log('failed validation! 1');
      setError({
        title: 'Error',
        message: 'An error has occurred',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Error',
        message: 'An error has occurred',
      });
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    console.log('this is userdata' + userData);

    props.onSubmit(userData);
    nameRef.current.value = '';
    ageRef.current.value = '';
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
            <input type="text" ref={nameRef} />
          </div>
          <div>
            <label>Age</label>
            <input type="number" ref={ageRef} />
          </div>
          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
