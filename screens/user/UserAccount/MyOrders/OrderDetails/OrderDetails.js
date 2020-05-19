import React from 'react';
import {ScrollView} from 'react-native';
import {Icon, Text, ListItem} from 'react-native-elements';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';

import HeaderButton from '../../../../../components/UI/HeaderButton';
import Colors from '../../../../../constants/Colors';
import Section from '../../../../../components/UI/Section';
import {styles} from './OrderDetails.style';

const OrderDetails = props => {
  const {orderId} = props.route.params;
  const orders = useSelector(state => state.orders.ordersList);
  const orderDetails = orders.find(order => order.order_id === orderId);
  const listData = [
    {leftText: 'Order Id', rightText: orderDetails.order_id},
    {leftText: 'Order Date', rightText: orderDetails.date_added},
    {leftText: 'Total Amount', rightText: orderDetails.total},
    {leftText: 'Payment Mode', rightText: 'COD'},
    {leftText: 'Shipping Address', rightText: 'Poltava, Ukraine'},
    {leftText: 'Status', rightText: orderDetails.status},
  ];

  return (
    <ScrollView>
      <Section>
        {listData.map(item => (
          <ListItem
            key={item.leftText}
            containerStyle={styles.textContainer}
            title={`${item.leftText}:`}
            titleStyle={styles.leftText}
            rightTitle={item.rightText}
            onPress={() => {
              if (item.leftText === 'Shipping Address') {
                props.navigation.navigate('Map');
              }
            }}
          />
        ))}
      </Section>
      <Section>
        <Text>Ordered Products:</Text>
      </Section>
    </ScrollView>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: '',
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

export default OrderDetails;
