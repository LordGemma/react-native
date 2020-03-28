import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { connect } from 'react-redux';
import { changeCount } from './store/actions';
import { bindActionCreators } from 'redux';



class App extends Component {
  decrementCount() {
    let { counter: {count}, actions } = this.props;
    count--;
    actions.changeCount(count);
  }

  incrementCount() {
    let { counter: {count}, actions } = this.props;
    
    count++;
    actions.changeCount(count);
  }

  render() {
    const { counter: {count} } = this.props;   

    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  counter: state.counter,
});

const ActionCreators = {
  changeCount,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)