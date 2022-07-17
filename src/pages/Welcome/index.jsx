import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo-xp-inc.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.textTitle}>Processo Seletivo para Mobile</Text>
        <Text style={styles.textDev}>Desenvolvido por Bruno Marmello</Text>
        <Text style={styles.textLogin}>Faça Login Para Começar!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#EFEEEE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 6,
  },
  textDev: {
    fontSize: 20,
    marginTop: 1,
  },
  textLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FFC708',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 28,
    color: '#767e67',
    fontWeight: 'bold'
  }
})