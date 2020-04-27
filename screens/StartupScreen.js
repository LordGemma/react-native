import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
import {styles} from './StartupScreen.style';

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        dispatch(authActions.setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token} = transformedData;

      dispatch(authActions.authenticate(token));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default StartupScreen;
