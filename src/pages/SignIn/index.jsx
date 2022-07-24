import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  DrawerLayoutAndroidBase,
} from 'react-native';

import styles from './style';

import * as Animatable from 'react-native-animatable';

// import { useNavigation } from '@react-navigation/native';

// import firebase from '../../config/firebaseConfig';
// import database from '../../config/firebaseConfig';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignIn({ navigation }) {
  // const navigation = useNavigation();
  // const database = firebase.firestore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    // const auth = getAuth();
    firebase.auth().signInWithEmailAndPassword(email, password)  
    .then((userCredential) => {
      
      let user = userCredential.user;
      // console.log(user);
      // navigation.navigate('Wallet', { idUser: user.uid });
    })
    .catch((error) => {
      setErrorLogin(true);
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };

  useEffect(() => {
    // database.collection("SignIn").onSnapshot((query) => {
    //   const list = [];
    //   query.forEach({ ...doc.data(), id: doc.id });
    // });
    // setEmail(list);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vinda || Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.textEmail}>e-Mail:</Text>
        <TextInput
          placeholder="Digite seu Melhor e-Mail..."
          style={styles.input}
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.textEmail}>Senha:</Text>
        <TextInput
          placeholder="Digite sua Senha..."
          secureTextEntry={true}
          style={styles.input}
          type="text"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Você digitou o e-mail e/ou a senha errado!</Text>
        </View>
        :
        <View />
        }

        {email === "" || password === ""
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonOff}
        >
          <Text style={styles.buttonTextOff}>Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonOn}
          onPress={ loginFirebase }
        >
          <Text style={styles.buttonTextOn}>Login</Text>
        </TouchableOpacity>
        }

        <Text style={styles.registerText}>
          Não Possui uma Conta?
          <Text
            style={styles.linkSubscribe}
            onPress={ () => navigation.navigate('SignUp') }
          >
            Cadastre-se!
          </Text>
        </Text>
        <View style={{height:100}} />
      </Animatable.View>

    </KeyboardAvoidingView>
  );
}
