import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

import {styles} from './Description.style';

const Description = ({descr}) => {
  return (
    <View>
      <Text h5 style={styles.title}>
        Description:
      </Text>
      <Text>{descr}</Text>
    </View>
  );
};

export default Description;
