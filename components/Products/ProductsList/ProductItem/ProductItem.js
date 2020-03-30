import React from 'react';
import {View} from 'react-native';
import {Card, Text, Image} from 'react-native-elements';

import {styles} from './ProductItem.style';

const ProductItem = ({image, title, children}) => {
  return (
    <View style={styles.item}>
      <Card containerStyle={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <Image
            source={{uri: image}}
            resizeMode="cover"
            style={{width: 100, height: 100}}
          />
        </View>
        <Text h4Style={styles.title} h4>
          {title}
        </Text>
        {children}
      </Card>
    </View>
  );
};

export default ProductItem;
