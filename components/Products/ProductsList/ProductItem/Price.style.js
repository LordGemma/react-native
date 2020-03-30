import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  price: {
    flexDirection: 'row',
  },
  regularPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginRight: 5,
  },
  salePrice: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  percent: {
    color: '#339bc8',
    marginRight: 5,
    fontWeight: 'bold',
  },
});
