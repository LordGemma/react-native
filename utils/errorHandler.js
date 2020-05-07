import {Vibration} from 'react-native';

export default error => {
  Vibration.vibrate(1000);
  throw error;
};
