import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 56,
    backgroundColor: THEME.COLORS.GRAY_400,
    borderRadius: 5,
    color: THEME.COLORS.TEXT,
    padding: 16,
    fontSize: 16,
    marginRight: 6,
    borderWidth: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,    
    backgroundColor: THEME.COLORS.BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
  }
});