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

  },
  backspace: {
    position: 'absolute',
    right: 0,
  },
  historyItem: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#937ce6',
    borderRadius: 20,
    paddingHorizontal: '0.6rem',
    marginHorizontal: '0.2rem',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '2.5rem',
    marginTop: 0,
    marginBottom: 'auto'
  }
});
