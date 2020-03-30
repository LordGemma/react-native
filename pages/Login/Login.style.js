import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contentLeft: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  pageTitle: {
    marginTop: 145,
    marginHorizontal: 100,
    fontWeight: 'normal',
    fontSize: 34,
    textAlign: 'center',
    color: '#00a8f3',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    marginBottom: 80,
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingTop: 15,
    color: '#333',
  },
  uppercase: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  signUpBtn: {
    marginVertical: 10,
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
