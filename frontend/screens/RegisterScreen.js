import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { commonStyles } from '../styles/commonStyles';

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
      <Text style={commonStyles.cardTitle}>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={commonStyles.formInput}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={commonStyles.formInput}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={commonStyles.formInput}
      />
      <TouchableOpacity style={commonStyles.primaryButton} onPress={handleSubmit}>
        <Text style={commonStyles.primaryButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
