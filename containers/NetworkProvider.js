import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const NetworkContext = React.createContext(true);

export const NetworkProvider = props => {
  const [isConnected, changeConnectionState] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      changeConnectionState(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <NetworkContext.Provider value={isConnected}>
      {props.children}
    </NetworkContext.Provider>
  );
};
