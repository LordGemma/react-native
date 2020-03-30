import React from 'react';
import {View} from 'react-native';
import {Text, Button, Image} from 'react-native-elements';

import {styles} from './Info.style';
import Price from '../../../components/Products/ProductsList/ProductItem/Price';

const Info = ({image, name, regularPrice, salePrice, isAvilable}) => {
  return (
    <View style={styles.container}>
      <Image
        containerStyle={styles.image}
        source={{uri: image}}
        style={{width: 200, height: 200}}
      />
      <Button
        buttonStyle={styles.stockBtn}
        title={isAvilable ? 'Instock' : 'Not Avaliable'}
      />
      <Text h4Style={styles.title} h4>
        {name}
      </Text>
      <Price regularPrice={regularPrice} salePrice={salePrice} />
    </View>
  );
};

export default Info;
