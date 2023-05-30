import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <>
      {' '}
      <nav className={s.nav}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Login
        </NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logOut())} type="button">
            Logout
          </button>
        ) : (
          <div>Нема</div>
        )}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
