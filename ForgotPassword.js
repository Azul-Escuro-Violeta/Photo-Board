import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci Minha Senha</Text>
      <Text style={styles.description}>Informe seu email para redefinir sua senha</Text>
      <View style={styles.input_container}>
          <TextInput
              style={styles.input_text}
              placeholder="Email"
              placeholderTextColor="#878787"
          />
          <Entypo style={styles.input_text_icon}name="mail" size={24} color="#878787" />
      </View>
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

  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 50,
    JustifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  input_text: {
    width: '90%',
    height: 50,
    fontSize: 16,
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
