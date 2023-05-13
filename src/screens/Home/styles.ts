import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_500,
  },
  content: {
    padding: 24,
    marginTop: -50,
    height: '100%',
  },
  tasks: {
    marginTop: 32,
  },
  headerListTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  headerTextL: {
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.BLUE,
  },
  headerTextR: {
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.PURPLE,
  },
  counter: {
    marginLeft: 6,
    backgroundColor: THEME.COLORS.GRAY_400,
    color:  THEME.COLORS.GRAY_200,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 100,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center', 
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_400,
    flex: 1,
  },
  emptyListText: {
    color: THEME.COLORS.TEXT_GRAY,
    flexWrap: 'wrap',
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 14,
    marginTop: 16,
  },
  emptyListTextS: {
    color: THEME.COLORS.TEXT_GRAY,
    flexWrap: 'wrap',
    fontSize: 14,
  },
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100%',
    marginTop: 50,
  }
});