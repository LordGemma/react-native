import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

import ProductsList from '../../../components/Products/ProductsList/ProductsList';
import {categories} from './productsData';
import {styles} from './Products.style';

const Products = () => {
  return (
    <View>
      {categories.map(category => (
        <View key={category}>
          <View style={styles.header}>
            <Text h3 h3Style={styles.categoryName}>
              {category.name}
            </Text>
            <Button
              buttonStyle={styles.viewAllBtn}
              titleStyle={{fontSize: 12}}
              title="View All"
            />
          </View>

          <ProductsList list={category.products} />
        </View>
      ))}
    </View>
  );
};

export default Products;
