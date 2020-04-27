import React from 'react';
import {View} from 'react-native';
import {Text, Image, Badge} from 'react-native-elements';

import {styles} from './Info.style';
import Price from '../../../../components/shop/Price/Price';

const Info = ({thumbnail, name, product_price, stock_status}) => {
  return (
    <View style={styles.container}>
      <Image
        containerStyle={styles.image}
        source={{uri: `http:${thumbnail}`}}
        style={{width: 200, height: 200}}
      />
      <Badge
        containerStyle={styles.badgeContainer}
        badgeStyle={styles.stockBtn}
        status="primary"
        value={stock_status}
      />
      <Text h4Style={styles.title} h4>
        {name}
      </Text>
      <Price regularPrice={product_price} />
    </View>
  );
};

export default Info;
