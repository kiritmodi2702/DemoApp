import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  content: {
    flex: 1,
    alignSelf: 'center',
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: colors.PRIMARY,
  },
  itemStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default styles;
