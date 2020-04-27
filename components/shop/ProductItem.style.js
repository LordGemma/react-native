import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  product: {
    margin: 20,
    flex: 1,
    shadowColor: '#f3f3f3',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    marginVertical: 2,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
});
