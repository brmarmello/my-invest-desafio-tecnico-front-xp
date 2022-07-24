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

// import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

//  import { firebase, database } from '../../config/firebaseConfig';

// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell,
// } from 'react-native-table-component';

export default function Walllet({ navigation }) {
  // const navigation = useNavigation();
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

  function deleteWallet(id) {
    database.collection('Wallet').doc(id).delete();
  }

  useEffect(() => {
    database.collection('Wallet').onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list);
    });
  }, []);

  return (
    <>
      <View>
        {/* <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Usuário: XPTO</Text>
        </Animatable.View> */}
      </View>
      
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={wallet}
          renderItem={(item) => {
            return (
              <View style={styles.contextAllWallets}>
                <TouchableOpacity
                  style={styles.deleteWallet}
                  onPress={() => {
                    deleteWallet(item.id)
                  }}
                >
                  <FontAwesome
                    name='star'
                    size={23}
                    color='#FFC708'
                  >

                  </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.descriptionWallet}
                  onPress={() => {
                    navigation.navigate('DepositWithdrawal', {
                      id: item.id,
                      description: item.description
                    });
                  }}
                >
                  {item.description}
                </Text>
              </View>
            );
          }}
        />
        <TouchableOpacity
          style={styles.buttonNewShop}
          onPress={() => navigation.navigate('buySell')}
        >
          <Text
            style={styles.iconButton}
          >
            +
          </Text>
        </TouchableOpacity>
        {/* <Table>
         <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
         <Rows data={state.DataTable} textStyle={styles.TableText} />
       </Table> */}

      </View>
      
      <View>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DepositWithdrawal')}
        >
          <Text style={styles.buttonText}>Depósito | Retirada</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};
//};
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // padding: 18,
    paddingTop: 20,
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
  },
  contextAllWallets: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deleteWallet: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  descriptionWallet: {
    width: '75%',
    alignContent: 'flex-start',
    backgroundColor: '#f5f5f5cf',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: '#000000'


  },
  buttonNewShop: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: '#f92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});