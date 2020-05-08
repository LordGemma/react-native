import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';
import FlatProductsList from '../ProductsList/FlatProductsList/FlatProductsList';

const Category = props => {
  return (
    <View>
      <FlatProductsList {...props} />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: _.unescape(navData.route.params.categoryTitle),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
          iconName="arrow-left"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Search"
          iconName="search"
          onPress={() => {
            navData.navigation.navigate('Home');
          }}
        />
        <Item
          title="Cart"
          iconName="shopping-cart"
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  };
};

export default Category;
