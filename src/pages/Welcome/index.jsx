import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

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
