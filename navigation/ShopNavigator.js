import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {Platform, SafeAreaView, View} from 'react-native';

import {
  MyAccount,
  MyCart,
  MyOrders,
  MyWishList,
} from '../screens/user/UserAccount';
import AuthScreen, {
  screenOptions as authScreenOptions,
} from '../screens/user/AuthScreen';
import SignUpScreen, {
  screenOptions as signUpScreenOptions,
} from '../screens/user/SignUpScreen';
import Colors from '../constants/Colors';
import Home, {screenOptions as homeOptions} from '../screens/shop/Home/Home';
import ProductDetails, {
  screenOptions as productDetailsOptions,
} from '../screens/shop/ProductDetails/ProductDetails';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'transparent' : Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="Home"
        component={Home}
        options={homeOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={productDetailsOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const AccountDrawerNavigator = createDrawerNavigator();

export const AccountNavigator = () => {
  return (
    <AccountDrawerNavigator.Navigator
      drawerContent={props => {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}>
      <AccountDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
      />
      <AccountDrawerNavigator.Screen name="MyAccount" component={MyAccount} />
      <AccountDrawerNavigator.Screen name="MyWishList" component={MyWishList} />
      <AccountDrawerNavigator.Screen name="MyCart" component={MyCart} />
      <AccountDrawerNavigator.Screen name="MyOrders" component={MyOrders} />
    </AccountDrawerNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={signUpScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
