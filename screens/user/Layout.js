import React from 'react';
import {Icon, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Layout.style';

const Layout = props => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#c4ddea', '#e3cad8', '#f5ebc8']}>
      {props.isBackButton && (
        <Icon
          containerStyle={styles.back}
          name="arrow-left"
          type="font-awesome"
          color="#333"
          onPress={() => navigation.goBack()}
        />
      )}
      <Text h1 h1Style={styles.pageTitle}>
        Ecommerce Store
      </Text>
      {props.children}
    </LinearGradient>
  );
};

export default Layout;
