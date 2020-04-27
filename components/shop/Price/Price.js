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
      {salePrice && <Text style={styles.salePrice}>{`$${salePrice}`}</Text>}
      <Text style={salePrice ? styles.regularPrice : styles.salePrice}>{`$${parseFloat(
        regularPrice,
      ).toFixed()}`}</Text>
      {salePrice && <Text style={styles.percent}>{`${percent}% Off`}</Text>}
    </View>
  );
};

Price.defaultProps = {
  salePrice: null,
};

export default Price;
