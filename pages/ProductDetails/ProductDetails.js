import React from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'react-native-elements';

import {styles} from './ProductDetails.style';
import Info from './Info/Info';
import Description from './Description/Description';
import Footer from './Footer/Footer';
import ColorSelector from './ColorSelector/ColorSelector';

const data = {
  image: 'https://picsum.photos/200/300',
  name: 'Xiaomi Mi A3',
  regularPrice: 244,
  salePrice: 222,
  description:
    "He third-iteration of Xiaomi’s Android One devices, the Mi A3 ships with a stock Android interface as opposed to the usual MIUI. Brings back the headphone jack, which was missing on the Mi A2. Another neat addition is a microSD card slot, which was also not available on the Mi A2. Despite these upgrades, the display quality has been downgraded from full HD to HD, which is disappointing in this price bracket. A plus point is support for 18W fast charging, but Xiaomi doesn't include a fast charger in the box ",
  colors: ['Blue'],
  isAvilable: true,
};

const ProductDetails = props => {
  return (
    <View style={styles.container}>
      <Header
        placement="right"
        leftComponent={
          <Icon type="font-awesome" name="arrow-left" color="#fff" />
        }
        centerComponent={{
          icon: 'search',
          color: '#fff',
        }}
        rightComponent={{icon: 'shopping-cart', color: '#fff'}}
        containerStyle={{
          backgroundColor: '#148cbf',
          paddingTop: 0,
          height: 60,
          borderBottomWidth: 0,
        }}
      />
      <Info {...data} />
      <View style={styles.section}>
        <ColorSelector colors={data.colors} />
      </View>
      <View style={styles.section}>
        <Description descr={data.description} />
      </View>
      <Footer />
    </View>
  );
};

export default ProductDetails;
