import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-reducer';
//Material UI
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <Box
      sx={{
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <SearchIcon sx={{ marginRight: `10px` }} />
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={onFilter}
      />
    </Box>
  );
}

export default Filter;
