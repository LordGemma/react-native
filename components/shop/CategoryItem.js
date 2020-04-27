import React from 'react';
import _ from 'lodash';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image, Text} from 'react-native-elements';

import {styles} from './CategoryItem.style';

const CategoryItem = ({title, imageUrl, onSelect}) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={onSelect} useForeground>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{uri: imageUrl}}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>{_.unescape(title)}</Text>
      </View>
    </TouchableCmp>
  );
};

export default CategoryItem;
