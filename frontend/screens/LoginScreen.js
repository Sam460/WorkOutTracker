import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { loginStyles } from '../styles/loginStyles'; // changed import to match usage

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login(email, password).catch(err =>
      alert(err?.response?.data?.message || 'Login failed')
    );
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.cardTitle}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={loginStyles.formInput}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={loginStyles.formInput}
      />
      <TouchableOpacity
        style={loginStyles.primaryButton}
        onPress={handleSubmit}
      >
        <Text style={loginStyles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
