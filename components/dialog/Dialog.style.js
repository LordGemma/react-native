import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  overlay: {
    minHeight: 150,
    height: 'auto',
  },
  container: {
    alignItems: 'center',
  },
  message: {
    fontSize: 22,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 10,
  },
  icon: {
    color: Colors.accent,
  },
});
