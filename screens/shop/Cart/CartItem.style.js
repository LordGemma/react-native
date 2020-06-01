import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 15,
    borderColor: '#cbcfd2',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  qty: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 'auto',
  },
  imageContainer: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
