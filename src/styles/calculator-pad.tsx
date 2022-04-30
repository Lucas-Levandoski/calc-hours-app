import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 'auto',
    marginBottom: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    height: '10%',
  },
  button: {
    width: '23%',
    height: '100%',
    textAlign: 'center',
    padding: 4,
    borderRadius: 10,
    marginHorizontal: '1%',
    justifyContent: 'center',
  },
});