import AsyncStorage from '@react-native-community/async-storage';
import {baseUrl} from '../constants';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = token => {
  return dispatch => {
    dispatch({type: AUTHENTICATE, token: token});
  };
};

export const login = (loginName, password) => {
  return async dispatch => {
    let response = {};
    try {
      const formData = new FormData();
      formData.append('loginname', loginName);
      formData.append('password', password);

      const data = await fetch(`${baseUrl}account/login`, {
        method: 'POST',
        body: formData,
      });

      response = await data.json();
    } catch (error) {
      console.error(error);
    }

    if (!response.success) {
      const errorId = response.error;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = response;
    dispatch(authenticate(resData.token));
    saveDataToStorage(resData.token);
  };
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

const saveDataToStorage = async token => {
  try {
    await AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        token,
      }),
    );
  } catch (err) {
    throw err;
  }
};
