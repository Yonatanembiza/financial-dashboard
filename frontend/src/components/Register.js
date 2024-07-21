// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(email, password);
      console.log(response.data);
      // Redirect to login on success
      window.location.href = '/login';
    } catch (error) {
      setError('Failed to register user');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box
          width="100%"
          padding={3}
          border={1}
          borderColor="grey.300"
          borderRadius={2}
          boxShadow={3}
          bgcolor="white"
        >
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
