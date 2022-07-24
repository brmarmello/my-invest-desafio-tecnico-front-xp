import { StyleSheet } from 'react-native';

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
    backgroundColor: '#FFC708',
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

export default styles;