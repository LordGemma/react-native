import React from 'react';
import {Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './Layout.style';

const Layout = props => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#c4ddea', '#e3cad8', '#f5ebc8']}>
      <Text h1 h1Style={styles.pageTitle}>
        Ecommerce Store
      </Text>
      {props.children}
    </LinearGradient>
  );
};

export default Layout;
