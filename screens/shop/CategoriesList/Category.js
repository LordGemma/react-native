import React, {useCallback, useEffect, useState} from 'react';
import _ from 'lodash';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {Image, ListItem} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';
import Price from '../../../components/shop/Price/Price';
import {styles} from './Category.style';
import Card from '../../../components/UI/Card';
import {fetchProductsWithPagination} from '../../../store/actions/products';

const Category = props => {
  const categoryId = props.route.params.categoryId;
  const [currentPage, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const categoryProducts = useSelector(
    state => state.products.categoryProducts,
  );

  const loadCategoryProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);

    try {
      await dispatch(fetchProductsWithPagination(categoryId, currentPage));
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener(
      'focus',
      loadCategoryProducts,
    );

    return () => {
      unsubscribe();
    };
  }, [loadCategoryProducts]);

  const handleLoadMore = () => {
    if (!isLoading) {
      setPage(currentPage + 1);
      setIsLoading(true);
      loadCategoryProducts().then(() => {
        setIsLoading(false);
      });
    }
  };

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }
    return <ActivityIndicator size="large" color={Colors.primary} />;
  };

  useEffect(() => {
    setIsLoading(true);
    loadCategoryProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        extraData={{
          isRefreshing,
          isLoading,
          currentPage,
        }}
        data={categoryProducts}
        refreshing={isRefreshing}
        renderItem={({item}) => {
          return (
            <Card style={styles.product}>
              <ListItem
                key={item.id}
                leftAvatar={
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{width: 130, height: 130}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                }
                title={item.title}
                subtitle={<Price regularPrice={item.price} />}
              />
            </Card>
          );
        }}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: _.unescape(navData.route.params.categoryTitle),
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

export default Category;
