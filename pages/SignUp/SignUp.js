import React from 'react';
import {View} from 'react-native';
import {Text, Input, Button, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './SignUp.style';

const SignUp = props => {
  return (
    <LinearGradient colors={['#c4ddea', '#e3cad8', '#f5ebc8']}>
      <View styles={styles.signUp}>
        <View style={{height: 8, backgroundColor: '#00a8f3'}} />
        <Icon
          containerStyle={styles.left}
          name="arrow-left"
          type="font-awesome"
          color="#333"
          size={28}
          onPress={() => console.log('back')}
        />
        <Text h1 h1Style={styles.pageTitle}>
          Ecommerce Store
        </Text>
        <Input
          containerStyle={{marginTop: 10}}
          style={styles.input}
          placeholder="Full Name"
        />
        <Input
          containerStyle={{marginTop: 10}}
          style={styles.input}
          placeholder="Email Address"
        />
        <Input
          containerStyle={{marginTop: 10}}
          style={styles.input}
          placeholder="Password"
        />
        <Input
          containerStyle={{marginTop: 10}}
          style={styles.input}
          placeholder="Confirm Password"
        />
        <Button
          buttonStyle={styles.signUpBtn}
          titleStyle={styles.uppercase}
          title="Sign Up"
          onPress={() => console.log('pressed')}
        />
        <Button
          title="Already have account? Sign In"
          buttonStyle={styles.loginBtn}
          titleStyle={{fontSize: 18}}
          type="clear"
          onPress={() => console.log('pressed')}
        />
      </View>
    </LinearGradient>
  );
};

export default SignUp;
