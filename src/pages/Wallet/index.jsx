import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import database from '../../config/firebaseconfig';

// import firebase from '../../config/firebase';

// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell,
// } from 'react-native-table-component';

export default function Walllet() {
  const navigation = useNavigation();
  const [wallet, setWallet] = useState([]);
  // const database = firebase.firestore();
// export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     HeadTable: ['Ação', 'Qtde', 'Valor (R$)', 'Negociar'],
  //     DataTable: [
  //       ['AZUL4', '100', '350,00', ''],
  //       ['PETR4', '100', '350,00', ''],
  //       ['VALE4', '100', '350,00', ''],
  //     ]
  //   }
  // }

  // render() {
  //   const state = this.state;

  useEffect(() => {
    ;
  }, []);

  return (
    <>
      <View>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Usuário: XPTO</Text>
        </Animatable.View>
      </View>
      
      <View style={styles.container}>
        {/* <Table>
         <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
         <Rows data={state.DataTable} textStyle={styles.TableText} />
       </Table> */}

      </View>
      
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DepositWithdrawal')}
        >
          <Text style={styles.buttonText}>Depósito | Retirada</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
//};
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ccccca',
  },
  TableText: { 
    margin: 10,
    color: '#525355',
  }
});