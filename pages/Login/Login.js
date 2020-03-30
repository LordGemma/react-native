import React from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './Login.style';

const Login = props => {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <LinearGradient colors={['#c4ddea', '#e3cad8', '#f5ebc8']}>
        <View styles={styles.login}>
          <Text h1 h1Style={styles.pageTitle}>
            Ecommerce Store
          </Text>
          <Input
            containerStyle={{marginTop: 10}}
            style={styles.input}
            placeholder="Email Address"
          />
          <Input
            containerStyle={{marginTop: 10}}
            inputStyle={{color: '#333'}}
            style={styles.input}
            placeholder="Password"
          />
          <Button
            buttonStyle={styles.contentLeft}
            titleStyle={{fontSize: 18}}
            title="Forgot Password?"
            type="clear"
            onPress={() => console.log('pressed')}
          />
          <Button
            titleStyle={styles.uppercase}
            title="Sign In"
            onPress={() => console.log('pressed')}
          />
          <Button
            title="New here? Sign Up"
            buttonStyle={styles.signUpBtn}
            titleStyle={{fontSize: 18}}
            type="clear"
            onPress={() => console.log('pressed')}
          />
        </View>
        <View>
          <Button
            buttonStyle={styles.withBorderTop}
            titleStyle={styles.skipBtn}
            title="Skip login"
            type="clear"
            iconRight
            icon={<Icon name="arrow-right" color="#00a8f3" size={18} />}
            onPress={() => console.log('pressed')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Login;
