import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: '3rem',
    marginBottom: '1rem'
  },
  clock: {
    position: 'absolute',
    left: 0,
    top: '0.5rem'

  },
  backspace: {
    position: 'absolute',
    right: 0,
    top: '0.5rem'
  },
  historyItem: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#937ce6',
    borderRadius: 20,
    paddingHorizontal: '0.6rem',
    paddingVertical: '0.2rem',
    margin: 2
  },
  historyItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '3.5rem',
    marginVertical: 'auto',
  }
});
