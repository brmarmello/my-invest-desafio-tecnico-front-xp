import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../config/firebase';

export default function SignUp() {
  const navigation = useNavigation();
  const database = firebase.firestore();

  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.textEmail}>Nome:</Text>
        <TextInput
          placeholder="Digite seu Nome Completo..."
          style={styles.input}
        />

        <Text style={styles.textEmail}>e-Mail:</Text>
        <TextInput
          placeholder="Digite seu Melhor e-Mail..."
          style={styles.input}
        />

        <Text style={styles.textEmail}>Senha:</Text>
        <TextInput
          placeholder="Digite sua Senha..."
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('Wallet') }
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
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
  registerText: {
    color: '#767e67',
    fontSize: 15,
    fontWeight: 'bold',
  }
})