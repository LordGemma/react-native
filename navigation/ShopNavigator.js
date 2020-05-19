import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Platform, View, Linking, ScrollView} from 'react-native';
import {Button, Divider, Icon, Text} from 'react-native-elements';
import Share from 'react-native-share';

import {
  MyAccount,
  myAccountOptions,
  MyCart,
  myCartOptions,
  MyOrders,
  myOrdersOptions,
  MyWishList,
  myWishListOptions,
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
import {styles} from './ShopNavigator.style';
import * as authActions from '../store/actions/auth';
import Category, {
  screenOptions as categoryOptions,
} from '../screens/shop/CategoriesList/Category';
import AccountNavigatorWrapper from './AccountNavigatorWrapper';
import OrderDetails, {
  screenOptions as orderDetailsOptions,
} from '../screens/user/UserAccount/MyOrders/OrderDetails/OrderDetails';
import Map, {screenOptions as mapOptions} from '../components/UI/Map';

export const defaultNavOptions = {
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

const onShare = async () => {
  const options = {
    url: 'http://bestmarket.ua',
    message: 'Best market for you!',
  };

  Share.open(options)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      err && console.log(err);
    });
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
      <ProductsStackNavigator.Screen
        name="Category"
        component={Category}
        options={categoryOptions}
      />
      <ProductsStackNavigator.Screen
        name="Map"
        component={Map}
        options={mapOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const AccountDrawerNavigator = createDrawerNavigator();

export const AccountNavigator = () => {
  const dispatch = useDispatch();
  const orderScreens = [
    {
      name: 'OrderDetails',
      component: OrderDetails,
      options: orderDetailsOptions,
    },
  ];

  return (
    <AccountDrawerNavigator.Navigator
      initialRouteName="Products"
      drawerContent={props => {
        return (
          <ScrollView style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Ecommerce Store</Text>
            </View>
            <View forceInset={{top: 'always', horizontal: 'never'}}>
              <Text h4Style={styles.sectionTitle} h4>
                My Account
              </Text>
              <DrawerItemList {...props} labelStyle={styles.labelStyle} />

              <Divider style={{backgroundColor: 'gray'}} />
              <Text h4Style={styles.sectionTitle} h4>
                Support
              </Text>

              <DrawerItem
                label="Email"
                icon={() => (
                  <Icon
                    name="envelope"
                    color={Colors.primary}
                    type="font-awesome"
                  />
                )}
                labelStyle={styles.labelStyle}
                onPress={() =>
                  Linking.openURL(
                    'mailto:support@example.com?subject=SendMail&body=Description',
                  )
                }
              />
              <DrawerItem
                label="Call"
                icon={() => (
                  <Icon
                    name="phone"
                    color={Colors.primary}
                    type="font-awesome"
                  />
                )}
                labelStyle={styles.labelStyle}
                onPress={() => Linking.openURL(`tel:+380983840349`)}
              />

              <Divider style={{backgroundColor: 'gray'}} />
              <Text h4Style={styles.sectionTitle} h4>
                Others
              </Text>

              <DrawerItem
                label="Share"
                icon={() => (
                  <Icon
                    name="share-alt"
                    color={Colors.primary}
                    type="font-awesome"
                  />
                )}
                labelStyle={styles.labelStyle}
                onPress={onShare}
              />
              <Button
                title="Log out"
                type="clear"
                icon={
                  <Icon
                    name="sign-out"
                    color={Colors.primary}
                    type="font-awesome"
                  />
                }
                titleStyle={styles.labelStyle}
                onPress={() => {
                  dispatch(authActions.logout());
                }}
              />
            </View>
          </ScrollView>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}>
      <AccountDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        // options={{title: () => null}}
      />
      <AccountDrawerNavigator.Screen
        name="MyAccount"
        component={() => (
          <AccountNavigatorWrapper
            name="MyAccount"
            component={MyAccount}
            options={myAccountOptions}
          />
        )}
        options={myAccountOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyWishList"
        component={() => (
          <AccountNavigatorWrapper
            name="MyWishList"
            component={MyWishList}
            options={myWishListOptions}
          />
        )}
        options={myWishListOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyCart"
        component={() => (
          <AccountNavigatorWrapper
            name="MyCart"
            component={MyCart}
            options={myCartOptions}
          />
        )}
        options={myCartOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyOrders"
        component={() => (
          <AccountNavigatorWrapper
            name="MyOrders"
            component={MyOrders}
            options={myOrdersOptions}
            children={orderScreens}
          />
        )}
        options={myOrdersOptions}
      />
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
