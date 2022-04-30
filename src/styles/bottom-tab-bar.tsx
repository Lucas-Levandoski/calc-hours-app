import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    textAlign: 'center',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});