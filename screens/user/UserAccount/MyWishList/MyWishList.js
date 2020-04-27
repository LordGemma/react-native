import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const MyWishList = () => {
  return (
    <View>
      <Text>My Wish List</Text>
    </View>
  );
};

export const screenOptions = {
  drawerIcon: () => (
    <Icon name="heart" color={Colors.primary} type="font-awesome" />
  ),
  drawerLabel: 'My Wish List',
};

export default MyWishList;
