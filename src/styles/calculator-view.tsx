import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: '0.5rem'
  },
  displayContainer: {
    display: 'flex',
    padding: 2,
    position: 'relative',
  },
  displaySideMenuContainer: {
    position: 'absolute',
    right: 2.5,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 60,
    opacity: 0.8,
  },
  displaySideMenuContent: {
    display: 'flex',
    flexGrow: 1,
    borderRadius: 3,
    margin: 'auto',
    marginTop: 9,
    marginBottom: 2.5,
    width: '100%',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  displayTextInput: {
    textAlign: 'right',
    height: '30vh',
    paddingRight: 60,
  },
  padContainer: {
    display: 'flex',
    flexGrow: 1,
  },
});