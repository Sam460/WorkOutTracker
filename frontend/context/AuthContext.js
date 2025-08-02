import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('token');
      const username = await AsyncStorage.getItem('username');
      if (token && username) setUser({ token, username });
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('/auth/login', { email, password });
    const { token, username } = res.data;
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('username', username);
    setUser({ token, username });
  };

  const register = async (username, email, password) => {
    const res = await axios.post('/auth/register', { username, email, password });
    const { token, username: uname } = res.data;
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('username', uname);
    setUser({ token, username: uname });
  };

  const logout = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
