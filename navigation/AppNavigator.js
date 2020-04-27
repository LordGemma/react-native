import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AccountNavigator, AuthNavigator} from './ShopNavigator';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);

  return (
    <NavigationContainer>
      {isAuth && <AccountNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
