import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

// import firebase from '../../config/firebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  // const database = firebase.firestore();

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
