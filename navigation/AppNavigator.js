import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AccountNavigator, AuthNavigator} from './ShopNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  console.log(didTryAutoLogin, isAuth);

  return (
    <NavigationContainer>
      {isAuth && <AccountNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
