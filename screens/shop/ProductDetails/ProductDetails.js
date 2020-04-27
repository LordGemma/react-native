import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Button, ScrollView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import he from 'he';

import HtmlView from 'react-native-htmlview';
import {styles} from './ProductDetails.style';
import Info from './Info/Info';
import Footer from './Footer/Footer';
import ColorSelector from './ColorSelector/ColorSelector';
import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';
import {Text} from 'react-native-elements';
import * as productsActions from '../../../store/actions/products';

const data = {
  colors: ['Blue'],
};

const ProductDetails = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const selectedProduct = useSelector(state => state.products.productDetails);
  const dispatch = useDispatch();

  const loadProductDetails = useCallback(async () => {
    setError(null);

    try {
      await dispatch(
        productsActions.fetchProductDetails(props.route.params.productId),
      );
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener(
      'focus',
      loadProductDetails,
    );

    return () => {
      unsubscribe();
    };
  }, [loadProductDetails]);

  useEffect(() => {
    setIsLoading(true);
    loadProductDetails().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProductDetails]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadProductDetails}
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

  if (!isLoading && !selectedProduct) {
    return (
      <View style={styles.centered}>
        <Text>No products found.</Text>
      </View>
    );
  }

  console.log(selectedProduct.description);

  return (
    <ScrollView style={styles.container}>
      <Info {...selectedProduct} />
      <View style={styles.section}>
        <ColorSelector colors={data.colors} />
      </View>
      <View style={styles.section}>
        <Text h5 style={styles.title}>
          Description:
        </Text>
        <HtmlView value={selectedProduct.description} />
      </View>
      <Footer />
    </ScrollView>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: null,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
          iconName="arrow-left"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Search"
          iconName="search"
          onPress={() => {
            navData.navigation.navigate('Home');
          }}
        />
        <Item
          title="Cart"
          iconName="shopping-cart"
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  };
};

export default ProductDetails;
