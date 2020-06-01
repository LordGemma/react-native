import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  emptyCartImage: {width: 200, height: 200},
  centered: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceDetailsContainer: {
    padding: 15,
    marginBottom: 25,
  },
  priceDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a7aaad',
    textTransform: 'uppercase',
    paddingBottom: 10,
    borderBottomColor: '#cbcfd2',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  priceDetailsRow: {
    paddingLeft: 0,
    paddingBottom: 0,
  },
  priceDetailsTotalPrice: {
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    borderTopWidth: 2,
    borderTopColor: '#cbcfd2',
    borderStyle: 'dotted',
  },
});
