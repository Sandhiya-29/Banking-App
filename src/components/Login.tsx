import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { loginSuccess } from '../store/slices/AuthSlice';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    const mockUser = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'john@123'
    };
    if (username && email && password) {
      dispatch(loginSuccess(mockUser));
          navigate('/dashboard');
        } else {
          alert('Please fill in all fields.');
        }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 2 }}>
      <Typography variant="h4" align="center">Bank Login</Typography>
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
        Login
      </Button>
      <Button onClick={() => navigate('/registration')} sx={{ color: 'primary.main' }}>
            Not member yet?Join here
          </Button>
    </Box>
  );
};

export default Login;

