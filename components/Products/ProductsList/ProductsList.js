import React from 'react';
import {View} from 'react-native';

import ProductItem from './ProductItem/ProductItem';
import {styles} from './ProductsList.style';
import Price from './ProductItem/Price';

const ProductsList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map(product => {
        const id = Math.random();
        return (
          <ProductItem key={`${product.title}${id}`} {...product}>
            <Price {...product} />
          </ProductItem>
        );
      })}
    </View>
  );
};

export default ProductsList;
