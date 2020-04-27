import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
