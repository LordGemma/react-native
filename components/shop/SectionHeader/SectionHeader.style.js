import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 12,
  },
});
