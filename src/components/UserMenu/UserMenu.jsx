import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
//Material UI
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <div>
      <>
        <ListItemButton style={{ cursor: `default` }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={user.email} />
        </ListItemButton>
      </>
      <ListItemButton onClick={() => dispatch(logOut())} type="button">
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </div>
  );
}

export default UserMenu;
