import React from 'react';
import {ScrollView, View, KeyboardAvoidingView} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {styles} from './SignUpScreen.style';
import Layout from './Layout';

const SignUpScreen = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}>
      <Layout>
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
  title: '',
};

export default SignUpScreen;
