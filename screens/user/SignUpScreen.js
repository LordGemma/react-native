import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';

import {styles} from './SignUpScreen.style';
import Layout from './Layout';

const SignUpScreen = props => {
  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior="padding"
      style={styles.screen}>
      <Layout isBackButton {...props}>
        <Input
          containerStyle={styles.inputContainer}
          style={styles.input}
          placeholder="Full Name"
        />
        <Input
          containerStyle={styles.inputContainer}
          style={styles.input}
          placeholder="Email Address"
        />
        <Input
          containerStyle={styles.inputContainer}
          style={styles.input}
          placeholder="Password"
        />
        <Input
          containerStyle={styles.inputContainer}
          style={styles.input}
          placeholder="Confirm Password"
        />
        <View style={styles.buttonContainer}>
          <>
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
              onPress={() => props.navigation.navigate('Auth')}
            />
          </>
        </View>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerShown: false,
};

export default SignUpScreen;
