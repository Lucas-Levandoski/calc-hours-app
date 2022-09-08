import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: '4rem'
  },
  clock: {
    position: 'absolute',
    left: 0
  },
  backspace: {
    position: 'absolute',
    right: 0
  },
  historyItem: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#937ce6',
    borderRadius: 20,
    padding: 0,
    margin: 2
  },
  historyItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '3.5rem',
    marginVertical: 'auto',
  }
});
