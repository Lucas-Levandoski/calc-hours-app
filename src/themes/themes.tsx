import { DefaultTheme, DarkTheme as DarkThemeImported } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

export const DarkTheme: Theme = {
  ...DarkThemeImported,
  
};

export const LightTheme = {
  ...DefaultTheme
};
