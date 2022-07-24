// ESTA PÁGINA SERÁ USADA PARA PÁGINA DE PERFIL DO USUÁRIO! MUDEI A ROTA DE SIGNUP PARA WALLET, DESSA FORMA O USUÁRIO É REDIRECIONADO DIRETO PARA CARTEIRA DIGITAL AO CRIAR LOGIN E SENHA. ISSO MUDARÁ QUANDO A PÁGINA DE PERFIL ESTIVER PRONTA.
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

// import firebase from '../../config/firebaseConfig;

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

    </View>
  );
}
