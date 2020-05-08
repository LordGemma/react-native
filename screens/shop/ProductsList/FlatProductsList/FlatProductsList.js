import React, {useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {Image, ListItem} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import Price from '../../../../components/shop/Price/Price';
import {styles} from './FlatProductsList.style';
import Card from '../../../../components/UI/Card';

const FlatProductsList = ({route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const products = useSelector(state => state.products.groupedProducts);

  const categoryProducts = products.find(
    item => route.params.categoryId === item.categoryId,
  );
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={categoryProducts.data}
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
      />
    </View>
  );
};

export default FlatProductsList;
