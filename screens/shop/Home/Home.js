import React from 'react';
import {View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';
import CategoriesList from '../CategoriesList/CategoriesList';
import ProductList from '../ProductsList/ProductsList';

const Home = props => {
  return (
    <View>
      <CategoriesList {...props} />
      <ProductList {...props} />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Ecommerce Store',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
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

export default Home;
