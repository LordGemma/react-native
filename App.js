import 'react-native-gesture-handler';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import AppNavigator from './navigation/AppNavigator';
import {rootReducer} from './store/rootReducer';
import {NetworkProvider} from './containers/NetworkProvider';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <AppNavigator />
      </NetworkProvider>
    </Provider>
  );
};

export default App;
