import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import logo from './assets/images/logo_.png';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation do React Navigation


export default function Signup() {
  const navigation = useNavigation(); // Obtém a instância de navegação

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf')
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.viewp}>
        <View style={styles.main_container}>
          <View style={styles.top}>
            <Text style={styles.vamos_comecar}>Vamos Começar?</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottom_content}>
              <View style={styles.welcome_text_container}>
              </View>
              <View style={styles.container_inputs}>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#878787"
                  />
                  <Ionicons name="person" size={24} color="#878787" />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#878787"
                  />
                  <Entypo name="mail" size={24} color="#878787" />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#878787"
                    secureTextEntry={true}
                  />
                  <Ionicons name="eye-off" size={24} color="#878787" />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirme a Senha"
                    placeholderTextColor="#878787"
                    secureTextEntry={true}
                  />
                  <Ionicons name="eye-off" size={24} color="#878787" />
                </View>
              </View>
              <View style={styles.submit_area}>
                <TouchableOpacity
                  style={styles.button}
                  underlayColor="lightblue" // Cor de destaque quando pressionado
                >
                  <Text style={styles.submitText}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.signupText}
                      onPress={() => navigation.navigate('Login')} // Navegação de Siginup para Loogin
                      >Já tem uma conta? Faça login
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  viewp: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  main_container: {
    height: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  top: {
    width: '85%',
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    resizeMode: 'contain',
    width: '85%',
  },

  bottom: {
    flex: 3,
    width: '100%',
    backgroundColor: '#297447',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottom_content: {
    flex: 1,
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  container_inputs: {
    width: '100%',
    alignItems: 'center',
  },
  

  containerImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  vamos_comecar: {
    alignItems: 'center',
    fontSize: 32,
    justifyContent: 'center',
    fontFamily:"Poppins-Bold",
    color: 'white',
  },

  welcome_text_container: {
    width: '100%',

  },

  welcome_text: {
    color: 'white',
    marginLeft: 20,
    marginTop: 30,
    fontSize: 32,
    fontFamily:"Poppins-Bold",
    textAlign: 'center'
  },

  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  input: {
    width: '90%',
    height: 50,
    fontSize: 16,
  },

  password_text_container: {
    alignItems: 'flex-end',
  },

  forgot_my_password: {
    color: 'white',
    fontSize: 14,
  },

  submit_area: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  submitText: {
    color: 'white',
    fontFamily: 'Poppins-Bold'
  },

  signupText: {
    marginBottom: 30,
  }

});
