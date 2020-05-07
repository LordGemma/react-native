import {Vibration} from 'react-native';
import {connectionDialog} from '../store/actions/dialog';

export default (error, dispatch) => {
  Vibration.vibrate(1000);
  dispatch(connectionDialog(true, error, 'exclamation-circle'));
  throw error;
};
