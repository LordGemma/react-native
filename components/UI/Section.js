import React from 'react';
import {View} from 'react-native';

import {styles} from './Section.style';

const Section = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Section;
