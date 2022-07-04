import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    flex: 1,
    alignSelf: 'center',
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  sectionStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor: colors.SECONDARY,
  },

  containerModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 65, 81, 0.4)',
    alignItems: 'center',
  },
  contentModal: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    ...Platform.select({
      ios: {
        shadowColor: colors.BLACK,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  baseViewModal: {
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: colors.WHITE,
    width: Dimensions.get('window').width - 80,
    alignSelf: 'center',
  },
  txtDetailArticle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '98%',
    paddingBottom: 10,
  },
  inputStyle: {
    height: 40,
    width: '40%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  viewItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
  },
  sectionItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
