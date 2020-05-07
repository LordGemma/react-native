import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, ActivityIndicator, FlatList} from 'react-native';

import * as categoryActions from '../../../store/actions/categories';
import {styles} from './CategoriesList.style';
import Colors from '../../../constants/Colors';
import CategoryItem from '../../../components/shop/CategoryItem';
import {useNetInfo} from '@react-native-community/netinfo';
import {connectionDialog} from '../../../store/actions/dialog';

const CategoriesList = props => {
  const netInfo = useNetInfo();
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const categories = useSelector(state => state.categories.availableCategories);
  const dispatch = useDispatch();

  const loadCategories = useCallback(async () => {
    // if (!netInfo.isConnected) {
    //   dispatch(
    //     connectionDialog(
    //       true,
    //       'No internet connection!\n Please check it',
    //       'exclamation-circle',
    //     ),
    //   );
    //   return;
    // }
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(categoryActions.fetchCategories());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', loadCategories);

    return () => {
      unsubscribe();
    };
  }, [loadCategories]);

  useEffect(() => {
    setIsLoading(true);
    loadCategories().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCategories]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.categories}>
        <FlatList
          onRefresh={loadCategories}
          horizontal={true}
          refreshing={isRefreshing}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={category => (
            <CategoryItem
              {...category.item}
              onSelect={() => {
                console.log('category was selected');
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CategoriesList;
