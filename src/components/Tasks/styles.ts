import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.GRAY_400,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 10,
    borderRadius: 12,
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'center'
  
  },
  text: {
    color: THEME.COLORS.TEXT,
    flexWrap:  'wrap'
  },
  textCompleted: {
    color: THEME.COLORS.TEXT_GRAY,
    textDecorationLine: 'line-through',
    flexWrap:  'wrap'
  }
});