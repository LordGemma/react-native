import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import Colors from '../../../../constants/Colors';

const MyAccount = () => {
  return (
    <View>
      <Text>My Account</Text>
    </View>
  );
};

export const screenOptions = {
  drawerIcon: () => (
    <Icon name="user" color={Colors.primary} type="font-awesome" />
  ),
  drawerLabel: 'My Account',
};

export default MyAccount;
