import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { commonStyles } from '../styles/commonStyles';

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
    <View style={{ padding: 24 }}>
      <Text style={commonStyles.cardTitle}>Login</Text>
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
        <Text style={commonStyles.primaryButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
