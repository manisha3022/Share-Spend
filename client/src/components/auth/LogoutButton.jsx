import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

import "../../styles/expense.css";

const LogoutButton = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:3001/api/auth/logout',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      logout();
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleLogout} className='logout-button'>Logout</button>;
};

export default LogoutButton;