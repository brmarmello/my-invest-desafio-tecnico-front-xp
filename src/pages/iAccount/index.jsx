// ESTA PÁGINA SERÁ USADA PARA PÁGINA DE PERFIL DO USUÁRIO! MUDEI A ROTA DE SIGNUP PARA WALLET, DESSA FORMA O USUÁRIO É REDIRECIONADO DIRETO PARA CARTEIRA DIGITAL AO CRIAR LOGIN E SENHA. ISSO MUDARÁ QUANDO A PÁGINA DE PERFIL ESTIVER PRONTA.
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
  }
})