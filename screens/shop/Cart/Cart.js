import React, {useCallback, useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Image, ListItem} from 'react-native-elements';

import HeaderButton from '../../../components/UI/HeaderButton';
import {styles} from './Cart.style';
import Colors from '../../../constants/Colors';
import * as cartActions from '../../../store/actions/cart';
import CartItem from './CartItem';
import Card from '../../../components/UI/Card';

const Cart = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const isEmpty = products.length === 0;
  const productsAmount = products.reduce((amount, product) => {
    return product.quantity + amount;
  }, 0);

  const loadCart = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);

    try {
      await dispatch(cartActions.fetchCart());
    } catch (err) {
      setError(err.message);
    }

    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', loadCart);

    return () => {
      unsubscribe();
    };
  }, [loadCart]);

  useEffect(() => {
    setIsLoading(true);
    loadCart().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCart]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {isEmpty ? (
        <Image
          source={require('../../../assets/empty-cart.png')}
          style={styles.emptyCartImage}
        />
      ) : (
        <View>
          <FlatList
            keyExtractor={item => item.productId}
            extraData={{
              isRefreshing,
              isLoading,
            }}
            onRefresh={loadCart}
            data={products}
            refreshing={isRefreshing}
            renderItem={({item}) => {
              console.log(item);

              return <CartItem {...item} />;
            }}
          />
          <Card style={styles.priceDetailsContainer}>
            <Text style={styles.priceDetailsTitle}>Price details</Text>
            <ListItem
              containerStyle={styles.priceDetailsRow}
              title={`Price (${productsAmount} items)`}
              rightTitle={totalAmount[0].text}
            />
            <ListItem
              containerStyle={styles.priceDetailsRow}
              title="Delivery"
              rightTitle={'0'}
            />
            <ListItem
              containerStyle={styles.priceDetailsRow}
              title="Tax (0%)"
              rightTitle={totalAmount[0].text}
            />
            <ListItem
              containerStyle={styles.priceDetailsTotalPrice}
              title="Amount Payable"
              rightTitle={totalAmount[1].text}
            />
          </Card>
        </View>
      )}
    </ScrollView>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'My Cart',
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
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  };
};

export default Cart;
