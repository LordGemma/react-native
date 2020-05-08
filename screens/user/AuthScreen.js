import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {View, KeyboardAvoidingView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {useNetInfo} from '@react-native-community/netinfo';
import Input from '../../components/UI/Input';

import {styles} from './AuthScreen.style';
import * as authActions from '../../store/actions/auth';
import Layout from './Layout';
import {AUTHENTICATE} from '../../store/actions/auth';
import Dialog from '../../components/dialog/Dialog';
import {connectionDialog} from '../../store/actions/dialog';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = props => {
  const netInfo = useNetInfo();
  const visibility = useSelector(state => state.dialog.isVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  if (!netInfo.isConnected) {
    dispatch(
      connectionDialog(
        true,
        'No internet connection!\n Please check it',
        'exclamation-circle',
      ),
    );
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      login: '',
      password: '',
    },
    inputValidities: {
      login: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const authHandler = async () => {
    const action = authActions.login(
      formState.inputValues.login,
      formState.inputValues.password,
    );
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior="padding"
      style={styles.screen}>
      <Layout>
        <Input
          id="login"
          required
          autoCapitalize="none"
          initialValue=""
          onInputChange={inputChangeHandler}
          errorText="Please enter login."
          placeholder="Login"
        />
        <Input
          id="password"
          placeholder="Password"
          keyboardType="default"
          secureTextEntry
          required
          minLength={5}
          autoCapitalize="none"
          errorText="Please enter a valid password."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.contentLeft}
            titleStyle={{fontSize: 18}}
            title="Forgot Password?"
            type="clear"
            onPress={() => console.log('pressed')}
          />
          <Button
            titleStyle={styles.uppercase}
            title="Sign In"
            // disabled={!formState.formIsValid}
            loading={isLoading}
            onPress={authHandler}
          />
          <Button
            title="New here? Sign Up"
            buttonStyle={styles.signUpBtn}
            titleStyle={{fontSize: 18}}
            type="clear"
            onPress={() => props.navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.withBorderTop}
            titleStyle={styles.skipBtn}
            title="Skip login"
            type="clear"
            iconRight
            icon={<Icon name="arrow-right" color="#00a8f3" size={18} />}
            onPress={() =>
              dispatch({
                type: AUTHENTICATE,
                token: 'e4185e81137889f82565472301',
              })
            }
          />
        </View>
        {!netInfo.isConnected ? (
          <Dialog>
            <View style={styles.dialogButtonWrap}>
              <Button title="Try again" onPress={authHandler} />
              <Button
                title="Close"
                onPress={() => dispatch(connectionDialog(!visibility))}
              />
            </View>
          </Dialog>
        ) : (
          <Dialog>
            <View style={styles.dialogButtonWrap}>
              <Button
                title="Close"
                onPress={() => dispatch(connectionDialog(!visibility))}
              />
            </View>
          </Dialog>
        )}
      </Layout>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerShown: false,
};

export default AuthScreen;
