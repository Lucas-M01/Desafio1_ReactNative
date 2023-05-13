import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_700,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 110,
  }
});