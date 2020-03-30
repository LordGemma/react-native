import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    paddingBottom: 150,
  },
  contentLeft: {
    alignSelf: 'flex-end',
  },
  pageTitle: {
    marginTop: 70,
    marginHorizontal: 100,
    fontWeight: 'normal',
    fontSize: 34,
    textAlign: 'center',
    color: '#00a8f3',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    marginBottom: 50,
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
    marginBottom: 90,
  },
  left: {
    paddingLeft: 15,
    paddingTop: 15,
    alignSelf: 'flex-start',
  },
});
