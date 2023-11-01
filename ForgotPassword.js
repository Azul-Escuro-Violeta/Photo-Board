import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci Minha Senha</Text>
      <Text style={styles.description}>Informe seu email para redefinir sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#878787"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Email de Recuperação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    padding: 10,
    marginBottom: 20,
    color: 'black', // Customize the text color
  },
  button: {
    width: 300,
    height: 60,
    backgroundColor: '#297447',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
