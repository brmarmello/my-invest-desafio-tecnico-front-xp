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
  },
  containerForm: {
    backgroundColor: '#EFEEEE',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  textEmail: {
    fontSize: 24,
    marginTop: 28,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonOff: {
    backgroundColor: '#fde490',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOn: {
    backgroundColor: '#FFC708',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextOff: {
    color: '#abafa9',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonTextOn: {
    color: '#767e67',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#767e67',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  warningAlert: {
    paddingLeft: 10,
    color: '#bdbdbd',
    fontSize: 16,
  },
  linkSubscribe: {
    color: '#1877f2',
    fontSize: 16,
  }
})