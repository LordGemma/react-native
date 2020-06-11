import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonGroup, Button, CheckBox} from 'react-native-elements';
import Toast from 'react-native-toast-module';
import RNLocalNotifications from 'react-native-local-notifications';
// import moment from 'moment';

import {styles} from './Footer.style';
import {addToCart} from '../../../../store/actions/cart';

const Footer = ({productId, product}) => {
  const [isWishList, setIsWishList] = useState(false);
  const dispatch = useDispatch();
  const {thumbnail, name} = product;
  const message = `Product ${name} was added to your cart`;

  const buttons = [
    {
      element: () => (
        <CheckBox
          center
          title="WishList"
          iconType="font-awesome"
          checkedIcon="heart"
          uncheckedIcon="heart"
          checked={isWishList}
          containerStyle={styles.wishBtn}
          onPress={() => setIsWishList(!isWishList)}
        />
      ),
    },
    {
      element: () => (
        <Button
          title="Add To Cart"
          onPress={() => {
            RNLocalNotifications.createNotification(
              1000,
              message,
              // moment().format('YYYY-MM-DD HH:mm'),
              '2020-06-11 16:19',
              'default',
            );
            dispatch(addToCart(productId));
            Toast.addToCartDefault('Product was added to cart');
            // Toast.addToCartCustom('Product was added to cart');
          }}
        />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={buttons}
        containerStyle={{borderColor: 'transparent'}}
        buttonStyle={{backgroundColor: '#148cbf'}}
        textStyle={{color: '#fff'}}
      />
    </View>
  );
};

export default Footer;
