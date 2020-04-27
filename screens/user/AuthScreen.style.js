import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  authContainer: {
    flex: 1,
    paddingTop: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
  contentLeft: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  uppercase: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  signUpBtn: {
    marginVertical: 10,
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  skipBtn: {
    textTransform: 'uppercase',
    fontSize: 20,
    marginRight: 10,
  },
  withBorderTop: {
    borderTopColor: '#fff',
    borderTopWidth: 2,
    marginTop: 100,
  },
});
