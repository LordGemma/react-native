import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

import {styles} from './AuthScreen.style';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';
import Layout from './Layout';
import {AUTHENTICATE} from '../../store/actions/auth';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

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
    let action = authActions.login(
      formState.inputValues.login,
      formState.inputValues.password,
    );
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      // props.navigation.navigate('Shop');
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeLoginHandler = useCallback(
    inputValue => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: true,
        input: 'login',
      });
    },
    [dispatchFormState],
  );

  const inputChangePasswordHandler = useCallback(
    inputValue => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: true,
        input: 'password',
      });
    },
    [dispatchFormState],
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}>
      <Layout>
        <Input
          id="login"
          required
          login
          autoCapitalize="none"
          initialValue=""
          keyboardType="default"
          onChangeText={inputChangeLoginHandler}
          containerStyle={{marginTop: 10}}
          style={styles.input}
          errorMessage="Please enter a valid login."
          placeholder="Login"
        />
        <Input
          id="password"
          initialValue=""
          onChangeText={inputChangePasswordHandler}
          keyboardType="default"
          secureTextEntry
          required
          minLength={5}
          autoCapitalize="none"
          inputStyle={{color: '#333'}}
          errorText="Please enter a valid password."
          style={styles.input}
          placeholder="Password"
        />
        <View style={styles.buttonContainer}>
          {isLoading ? (
            <ActivityIndicator size="small" color={Colors.primary} />
          ) : (
            <>
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
                onPress={authHandler}
              />
              <Button
                title="New here? Sign Up"
                buttonStyle={styles.signUpBtn}
                titleStyle={{fontSize: 18}}
                type="clear"
                onPress={() => props.navigation.navigate('SignUp')}
              />
            </>
          )}
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
      </Layout>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerShown: false,
};

export default AuthScreen;
