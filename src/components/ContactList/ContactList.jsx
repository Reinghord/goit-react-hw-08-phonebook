import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/phonebook/phonebook-operations';
import { removeContacts } from 'redux/phonebook/phonebook-operations';
import { createPortal } from 'react-dom';
import ContactEditor from 'components/ContactEditor/ContactEditor';
import {
  getContacts,
  getFilteredContacts,
} from 'redux/phonebook/phonebook-selectors';
//Material UI
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

function ContactList() {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(removeContacts(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //Method to close Modal window
  const onCloseModal = () => {
    setShowModal(false);
  };

  const onHandleEdit = (id, name, number) => {
    setEditId(id);
    setEditName(name);
    setEditNumber(number);
    setShowModal(true);
  };

  return (
    <>
      <List>
        {contacts.length > 0 &&
          filteredContacts.map(contact => {
            return (
              <ListItem key={contact.id}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                {contact.name}: {contact.number}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onHandleEdit(contact.id, contact.name, contact.number);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onDelete(contact.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
      {showModal &&
        createPortal(
          <ContactEditor
            id={editId}
            name={editName}
            editNumber={editNumber}
            onCloseModal={onCloseModal}
          ></ContactEditor>,
          document.body
        )}
    </>
  );
}


export default ContactList;
