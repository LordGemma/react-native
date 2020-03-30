import React, {Component} from 'react';
import {ScrollView} from 'react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import {authReq} from './pages/services/auth';
import {styles} from './App.style';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import ProductDetails from './pages/ProductDetails/ProductDetails';

class App extends Component {
  async componentDidMount() {
    const response = await authReq();
    console.log(response);
  }

  render() {
    return (
      <ScrollView>
        {/* <ProductDetails /> */}
        {/* <Main /> */}
        {/* <Login /> */}
        <SignUp />
      </ScrollView>
    );
  }
}

export default App;
