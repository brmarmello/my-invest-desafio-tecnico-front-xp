import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

// import firebase from '../../config/firebase';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  // const database = firebase.firestore();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    ;
  };

  useEffect(() => {
    ;
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vinda || Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.textEmail}>e-Mail:</Text>
        <TextInput
          placeholder="Digite seu Melhor e-Mail..."
          style={styles.input}
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.textEmail}>Senha:</Text>
        <TextInput
          placeholder="Digite sua Senha..."
          secureTextEntry={true}
          style={styles.input}
          type="text"
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />

        {errorLogin === true
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#bdbdbd"
            />
            <Text style={styles.warningAlert}>Você digitou o e-mail e/ou a senha errado!</Text>
        </View>
        :
        <View />
        }
          
        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('Wallet') }
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={ () => navigation.navigate('SignUp') }
        >
          <Text style={styles.registerText}>Não Possui uma Conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </Animatable.View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '1%',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EFEEEE',
    textAlign: 'center',
  },
  containerForm: {
    backgroundColor: '#EFEEEE',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  textEmail: {
    fontSize: 24,
    marginTop: 28,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFC708',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#767e67',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#767e67',
    fontSize: 15,
    fontWeight: 'bold',
  }
})