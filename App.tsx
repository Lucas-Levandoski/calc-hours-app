import React from 'react';
import { ToastProvider } from 'react-native-fast-toast';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux/store';
import ThemesProvider from './src/themes';
import Calculator from './src/views/calculator';

export default function App() {


  return (
    <StoreProvider store={store}>
      <ThemesProvider>
        <ToastProvider placement='top'>
          <Calculator />
        </ToastProvider>
      </ThemesProvider>
    </StoreProvider>
  );
}

