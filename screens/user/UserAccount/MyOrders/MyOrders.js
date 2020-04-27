import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const MyOrders = () => {
  return (
    <View>
      <Text>My Orders</Text>
    </View>
  );
};

export const screenOptions = {
  drawerIcon: () => (
    <Icon name="cart-arrow-down" color={Colors.primary} type="font-awesome" />
  ),
  drawerLabel: 'My Orders',
};

export default MyOrders;
