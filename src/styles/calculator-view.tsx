import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    display: 'flex',
    flexGrow: 1,
  },
  topContainer: {
    height: '27.25vh',
    backgroundColor: '#EAEBED',
    padding: '1rem',
    position: 'relative',
  },
  hr: {
    height: '1.5vh',
    width: '100%'
  },
  bottomContainer: {
    height: '71.25vh',
    backgroundColor: '#C9BAFF',
    padding: '1rem'
  },
  displayContainer: {
    display: 'flex',
    flexGrow: 1,
    padding: 2
  },
  displayTextInput: {
    textAlign: 'right',
    paddingRight: 60,
  },
  calcPadContainer: {
    display: 'flex',
    flexGrow: 1,
  },
  returnTypePadContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  historyPadContainer: {

  },
  configBarContainer: {
    position: 'absolute',
    top: '1rem',
    left: '1rem'
  }
});