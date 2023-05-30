import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { fetchContacts } from 'redux/phonebook/phonebook-operations';
import { Routes, Route } from 'react-router-dom';
import Register from './Register/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Routes>
    </div>
  );
}

export default App;
