import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../services/authService';
import axiosInstance from '../API/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      axiosInstance.post('auth/verify-token/', null, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        if (response.data.valid) {
          setUser(response.data.payload);
        } else {
          navigate('/');
        }
      }).catch(() => {
        navigate('/');
      });
    } else {
      navigate('/');
    }
  }, [navigate]);

  const login = async (username, password) => {
    const { access_token } = await loginService(username, password);
    sessionStorage.setItem('token', access_token);
    setUser({ token: access_token });
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    navigate('/home');
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
