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
