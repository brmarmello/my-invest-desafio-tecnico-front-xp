import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo-xp-inc.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.textTitle}>Processo Seletivo para Mobile</Text>
        <Text style={styles.textDev}>Desenvolvido por Bruno Marmello</Text>
        <Text style={styles.textLogin}>Faça Login Para Começar!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate('SignIn') }
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

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
    borderRadius: 10,
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