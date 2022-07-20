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

export default function Wallet() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerBody}>
        <Text style={styles.message}>EM CONSTRUÇÃO</Text>
      </Animatable.View>

      <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('DepositWithdrawal') }
        >
        <Text style={styles.buttonText}>Depósito | Retirada</Text>
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