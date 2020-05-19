import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';

import HeaderButton from '../../../../components/UI/HeaderButton';
import Colors from '../../../../constants/Colors';
import Card from '../../../../components/UI/Card';
import {fetchOrders} from '../../../../store/actions/order';
import {styles} from './MyOrders.style';

const MyOrders = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const orders = useSelector(state => state.orders.ordersList);
  const dispatch = useDispatch();

  const loadOrders = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);

    try {
      await dispatch(fetchOrders());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', loadOrders);

    return () => {
      unsubscribe();
    };
  }, [loadOrders]);

  useEffect(() => {
    setIsLoading(true);
    loadOrders().then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const handleSelect = id => {
    props.navigation.navigate('OrderDetails', {
      orderId: id,
    });
  };

  return (
    <FlatList
      keyExtractor={item => item.order_id}
      extraData={{
        isRefreshing,
        isLoading,
      }}
      data={orders}
      refreshing={isRefreshing}
      renderItem={({item}) => {
        return (
          <Card style={styles.itemContainer}>
            <View style={styles.orderInfo}>
              <Button
                onPress={() => handleSelect(item.order_id)}
                title="View Order Details"
                type="clear"
              />
              <Text style={styles.date}>{`Date: ${item.date_added}`}</Text>
            </View>
          </Card>
        );
      }}
    />
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'My Orders',
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
    drawerIcon: () => (
      <Icon name="cart-arrow-down" color={Colors.primary} type="font-awesome" />
    ),
  };
};

export default MyOrders;
