import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/phonebook/phonebook-operations';
//Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ContactForm() {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.data);

  const dispatch = useDispatch();
  const onSubmit = (userName, number) =>
    dispatch(addContacts({ userName, number }));

  const onHandle = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === userName)) {
      return alert(`${userName} is already in contacts.`);
    }
    onSubmit(userName, number);
    setUserName('');
    setNumber('');
  };

  return (
    <form
      style={{ display: `flex`, flexDirection: `column`, width: `400px` }}
      onSubmit={onHandleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="standard"
        name="userName"
        value={userName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onHandle}
        style={{ marginBottom: `10px` }}
      />
      <TextField
        id="outlined-basic"
        label="Number"
        variant="standard"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onHandle}
        style={{ marginBottom: `10px` }}
      />
      <Button variant="contained" type="submit">
        Add Contact
      </Button>
    </form>
  );
}

export default ContactForm;
