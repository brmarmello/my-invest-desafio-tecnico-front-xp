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

// import firebase from '../../config/firebase';

export default function Wallet() {
  const navigation = useNavigation();
  // const database = firebase.firestore();

  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerHeader}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

      <TouchableOpacity
          style={styles.buttonGreen}
          onPress={ () => navigation.navigate('#') }
        >
        <Text style={styles.buttonText}>Depósito</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttonGrey}
          onPress={ () => navigation.navigate('#') }
        >
        <Text style={styles.buttonText}>Retirada</Text>
      </TouchableOpacity>

      <Animatable.View style={styles.containerBody}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

      <TouchableOpacity
          style={styles.buttonBlack1}
          onPress={ () => navigation.navigate('#') }
        >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttonBlack2}
          onPress={ () => navigation.navigate('#') }
        >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '1%',
  },
  containerBody: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '1%',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 9,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#f0f0f0',
    fontWeight: 'bold'
  }
})