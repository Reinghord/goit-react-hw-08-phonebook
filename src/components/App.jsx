import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

const Register = lazy(() => import(`./Register/Register`));
const Login = lazy(() => import(`./Login/Login`));
const Contacts = lazy(() => import(`./Contacts/Contacts`));

function App() {
  const dispatch = useDispatch();
  const isRefresing = useSelector(getIsRefreshing);
  console.log(isRefresing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresing ? (
    <b>Refresing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {' '}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            index
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            index
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="*"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
