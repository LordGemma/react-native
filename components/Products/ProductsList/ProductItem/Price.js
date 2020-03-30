import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

import {styles} from './Price.style';

const Price = ({regularPrice, salePrice}) => {
  let percent;
  if (salePrice) {
    percent =
      100 - Number.parseFloat((salePrice * 100) / regularPrice).toFixed();
  }

  return (
    <View style={styles.price}>
      <Text style={styles.salePrice}>{`$${salePrice}`}</Text>
      <Text style={styles.regularPrice}>{`$${regularPrice}`}</Text>
      <Text style={styles.percent}>{`${percent}% Off`}</Text>
    </View>
  );
};

export default Price;
