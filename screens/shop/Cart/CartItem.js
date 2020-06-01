import React from 'react';
import {View} from 'react-native';
import {Text, Image, Icon} from 'react-native-elements';

import Card from '../../../components/UI/Card';
import {styles} from './CartItem.style';
import Price from '../../../components/shop/Price/Price';

const CartItem = ({
  productId,
  productTitle,
  productPrice,
  productImage,
  quantity,
}) => {
  return (
    <Card style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{productTitle}</Text>
        <Price regularPrice={productPrice} />
        <Text style={styles.qty}>Qty: {quantity}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{uri: productImage}} style={styles.imageContainer} />
        <Icon name="trash" type="font-awesome" size={40} color="#cbcfd2" />
      </View>
    </Card>
  );
};

export default CartItem;
