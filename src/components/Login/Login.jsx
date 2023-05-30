import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

function Login() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const body = {
      email: email.value,
      password: password.value,
    };
    return dispatch(logIn(body));
  };

  return (
    <>
      {' '}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
