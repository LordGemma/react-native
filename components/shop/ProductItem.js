import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Text, Image} from 'react-native-elements';

import Card from '../UI/Card';
import {styles} from './ProductItem.style';
import Price from './Price/Price';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const productTitle =
    props.title.length > 35
      ? props.title.substring(0, 35) + '...'
      : props.title;

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: props.image}}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={styles.title}>{productTitle}</Text>
              <Price regularPrice={props.price} />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

export default ProductItem;
