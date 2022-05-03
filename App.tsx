import React from 'react';
import { ToastProvider } from 'react-native-fast-toast';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux/store';
import BottomRouter from './src/router';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemesProvider from './src/themes';

export default function App() {


  return (
    <StoreProvider store={store}>
      <ThemesProvider>
        <ToastProvider placement='top'>
          <BottomRouter />
        </ToastProvider>
      </ThemesProvider>
    </StoreProvider>
  );
}

