import React from 'react';
import {View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';

import {styles} from './ListItem.style';

const ListItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Avatar rounded icon={{name: 'home'}} size="medium" />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default ListItem;
