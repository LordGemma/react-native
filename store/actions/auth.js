import AsyncStorage from '@react-native-community/async-storage';
import {baseUrl} from '../constants';
import ErrorHandler from '../../utils/errorHandler';

export const SIGNUP = 'SIGNUP';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

const saveDataToStorage = async (token, dispatch) => {
  try {
    await AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        token,
      }),
    );
  } catch (err) {
    ErrorHandler(err, dispatch);
  }
};

export const setDidTryAL = () => {
  return {type: SET_DID_TRY_AL};
};

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
      console.log(response, loginName, password);
      const error = response.error;
      ErrorHandler(error, dispatch);
    }

    const resData = response;
    dispatch(authenticate(resData.token));
    saveDataToStorage(resData.token, dispatch);
  };
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return dispatch => dispatch({type: LOGOUT});
};
