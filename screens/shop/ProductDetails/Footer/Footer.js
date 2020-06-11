import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ButtonGroup, Button, CheckBox} from 'react-native-elements';
import Toast from 'react-native-toast-module';

import {styles} from './Footer.style';
import {addToCart} from '../../../../store/actions/cart';

const Footer = ({productId}) => {
  const [isWishList, setIsWishList] = useState(false);
  const dispatch = useDispatch();

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
