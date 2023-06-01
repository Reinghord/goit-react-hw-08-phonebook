import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
//Material UI
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Contacts() {
  return (
    <>
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{ mt: 4, mb: 4 }}
        style={{
          display: `flex`,
          flexDirection: `column`,
          textAlign: `center`,
          alignItems: `center`,
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default Contacts;
