import React, {useCallback, useEffect, useState, useContext} from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as productsActions from '../../../store/actions/products';
import {styles} from './ProductsList.style';
import Colors from '../../../constants/Colors';
import ProductItem from '../../../components/shop/ProductItem';
import SectionHeader from '../../../components/shop/SectionHeader/SectionHeader';

const ProductList = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const products = useSelector(state => state.products.groupedProducts);
  const categories = useSelector(state => state.categories.availableCategories);
  const dispatch = useDispatch();

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(productsActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', loadProducts);

    return () => {
      unsubscribe();
    };
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    if (categories.length) {
      loadProducts().then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, categories]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetails', {
      productId: id,
      productTitle: title,
    });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadProducts}
          color={Colors.primary}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found.</Text>
      </View>
    );
  }

  return (
    <View>
      {products.map(({categoryId, categoryName, data}) => {
        const productList = data;
        productList.length = 4;
        return (
          <View key={`${categoryId}-${data.length}`}>
            <SectionHeader id={categoryId} name={categoryName} />
            <FlatList
              data={productList}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <ProductItem
                    image={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    onSelect={() => {
                      selectItemHandler(item.id, item.title);
                    }}
                  />
                );
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProductList;
