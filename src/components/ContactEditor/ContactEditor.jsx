import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './ContactEditor.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContacts } from 'redux/phonebook/phonebook-operations';
//Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ContactEditor({ id, editName, editNumber, onCloseModal }) {
  const [name, setName] = useState(editName);
  const [number, setNumber] = useState(editNumber);
  const contacts = useSelector(state => state.contacts.data);
  const dispatch = useDispatch();
  const modalRef = useRef();

  //Adding focus on Overlay div when element mounts
  useEffect(() => {
    modalRef.current.focus();
  }, []);

  //Function to close modal on clicking Overlay or pressing Escape
  const handleClose = e => {
    if (
      (e.currentTarget === e.target && e.type === 'click') ||
      e.code === 'Escape'
    ) {
      onCloseModal();
    }
  };

  const onSubmit = contact => dispatch(updateContacts(contact));

  const onHandle = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
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
    if (contacts.find(contact => contact.name === name && contact.id !== id)) {
      return alert(`${name} is already in contacts.`);
    }
    const contact = {
      id,
      body: { name, number },
    };
    onSubmit(contact);
    setName('');
    setNumber('');
    onCloseModal();
  };

  return (
    <Overlay
      onClick={handleClose}
      onKeyDown={handleClose}
      ref={modalRef}
      tabIndex="-1"
      style={{ zIndex: `1202` }}
    >
      <ModalWindow
        style={{
          padding: `5px`,
          backgroundColor: `#F2EFE9`,
          borderRadius: `5px`,
        }}
      >
        <form
          style={{ display: `flex`, flexDirection: `column`, width: `400px` }}
          onSubmit={onHandleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="standard"
            name="name"
            value={name}
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
            Save Changes
          </Button>
        </form>
      </ModalWindow>
    </Overlay>
  );
}

ContactEditor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editNumber: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ContactEditor;
