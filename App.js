import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.text}>Bem Vindo!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  
  container_text: {
    width: '70%'
  },

  text: {
    color: 'white',
    marginBottom: 10,
    fontSize: '30px',

  },

  input: {
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

});
