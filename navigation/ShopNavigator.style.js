import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  drawerHeader: {
    paddingHorizontal: 25,
    paddingBottom: 30,
    paddingTop: 20,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  drawerTitle: {
    fontSize: 26,
    color: Colors.primary,
    fontWeight: 'bold',
    maxWidth: 200,
  },
  drawerItem: {},
  sectionTitle: {
    color: 'gray',
    fontSize: 14,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  labelStyle: {
    color: '#000',
    fontWeight: 'bold',
  },
});
