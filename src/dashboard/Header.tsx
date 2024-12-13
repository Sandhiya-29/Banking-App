import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/userReducer';

const Header: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {username ? `Welcome, ${username}` : 'Banking Dashboard'}
        </Typography>
        {username && (
          <IconButton color="inherit" onClick={handleLogout}>
            <PowerSettingsNewIcon />
          </IconButton>
        )}
        <Typography>
            Logout
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
