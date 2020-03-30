import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {styles} from './ColorSelector.style';

const ColorSelector = props => {
  return (
    <View>
      <Text h5 style={styles.title}>
        Select color:
      </Text>
      <View style={styles.container}>
        {props.colors.map(color => (
          <Button
            key={color}
            title={color}
            buttonStyle={styles.btn}
            titleStyle={styles.btnText}
          />
        ))}
      </View>
    </View>
  );
};

export default ColorSelector;
