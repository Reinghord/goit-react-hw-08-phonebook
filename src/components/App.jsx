import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import Contacts from './Contacts/Contacts';
import { RestrictedRoute } from './RestrictedRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
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
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
