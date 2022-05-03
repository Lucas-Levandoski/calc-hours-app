import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { DarkTheme, LightTheme } from './themes';
import { RootState } from '../redux/store';

type props = {
  children: any;
}

const ThemesProvider = ({ children }: props) => {
  const theme = useSelector((state: RootState) => state.theme.value)
  const [ paperTheme, setPaperTheme] = useState<any>(DarkTheme); 

  useEffect(() => {
    setPaperTheme(theme === 'dark' ? DarkTheme : LightTheme);
  }, [theme])

  return (
    <PaperProvider theme={paperTheme}>
      {children}
    </PaperProvider>
  );
}

export default ThemesProvider;