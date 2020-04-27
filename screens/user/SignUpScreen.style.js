import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  contentLeft: {
    alignSelf: 'flex-end',
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  uppercase: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  signUpBtn: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  loginBtn: {
    marginTop: 10,
  },
  left: {
    paddingLeft: 15,
    paddingTop: 15,
    alignSelf: 'flex-start',
  },
});
