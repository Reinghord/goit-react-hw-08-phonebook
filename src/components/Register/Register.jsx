import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

function Register() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const body = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    return dispatch(register(body));
  };

  return (
    <>
      {' '}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Username:
          <input type="text" name="name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default Register;
