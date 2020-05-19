import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {defaultNavOptions} from './ShopNavigator';

const AccountNavigatorWrapper = ({
  name,
  component,
  options,
  children = null,
}) => {
  const AccountStackNavigator = createStackNavigator();

  return (
    <AccountStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AccountStackNavigator.Screen
        name={name}
        component={component}
        options={options}
      />
      {children &&
        children.map(child => (
          <AccountStackNavigator.Screen
            key={child.name}
            name={child.name}
            component={child.component}
            options={child.options}
          />
        ))}
    </AccountStackNavigator.Navigator>
  );
};

export default AccountNavigatorWrapper;
