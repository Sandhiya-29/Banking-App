import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/slices/userReducer';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

const Registration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && email && password) {
      
      dispatch(register({ username, email, password }));
      navigate('/login'); 
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 2 }}>
      <Typography variant="h4" align="center">Bank Registration</Typography>
      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Register
      </Button>
      <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
        <Grid item>
        <Box sx={{ mt: 2, textAlign: 'left', marginRight:'70px' }}>
        <Button onClick={() => navigate('/')} sx={{ color: 'primary.main' }}>
          Already have an account? Login
        </Button>
      </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registration;
