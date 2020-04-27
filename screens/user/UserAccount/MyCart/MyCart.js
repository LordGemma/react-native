import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const MyCart = () => {
  return (
    <View>
      <Text>My Cart</Text>
    </View>
  );
};

export const screenOptions = {
  drawerIcon: () => (
    <Icon name="shopping-cart" color={Colors.primary} type="font-awesome" />
  ),
  drawerLabel: 'My Cart',
};

export default MyCart;
