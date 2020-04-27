import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Platform, SafeAreaView, View, Share, Linking} from 'react-native';
import {Button, Divider, Icon, Text} from 'react-native-elements';

import {
  MyAccount,
  MyAccountOptions,
  MyCart,
  MyCartOptions,
  MyOrders,
  MyOrdersOptions,
  MyWishList,
  MyWishListOptions,
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

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
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
  const dispatch = useDispatch();

  return (
    <AccountDrawerNavigator.Navigator
      initialRouteName="Products"
      drawerContent={props => {
        return (
          <View style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Ecommerce Store</Text>
            </View>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
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
        // options={{title: () => null}}
      />
      <AccountDrawerNavigator.Screen
        name="MyAccount"
        component={MyAccount}
        options={MyAccountOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyWishList"
        component={MyWishList}
        options={MyWishListOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyCart"
        component={MyCart}
        options={MyCartOptions}
      />
      <AccountDrawerNavigator.Screen
        name="MyOrders"
        component={MyOrders}
        options={MyOrdersOptions}
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
