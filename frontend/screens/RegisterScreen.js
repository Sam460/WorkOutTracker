import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { loginStyles } from '../styles/loginStyles';

const RegisterScreen = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    register(username, email, password).catch(err =>
      alert(err?.response?.data?.message || 'Registration failed')
    );
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={loginStyles.cardTitle}>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={loginStyles.formInput}
        autoCapitalize="words"
      />
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
      <TouchableOpacity style={loginStyles.primaryButton} onPress={handleSubmit}>
        <Text style={loginStyles.primaryButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
