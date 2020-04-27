import React from 'react';
import {View} from 'react-native';
import _ from 'lodash';
import {Button, Text} from 'react-native-elements';

import {styles} from './SectionHeader.style';

const SectionHeader = ({id, name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{_.unescape(name)}</Text>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="View All"
        onPress={() => console.log(id, name)}
      />
    </View>
  );
};

export default SectionHeader;
