import React from 'react';
import {View} from 'react-native';

import {styles} from './CategoriesList.style';
import ListItem from './ListItem/ListItem';

const CategoriesList = props => {
  const categories = [
    {name: 'Electronics', img: '', link: ''},
    {name: 'Cloth', img: '', link: ''},
    {name: 'Furnitures', img: '', link: ''},
  ];

  return (
    <View style={styles.categories}>
      {categories.map(item => (
        <ListItem key={item.name} {...item} />
      ))}
    </View>
  );
};

export default CategoriesList;
