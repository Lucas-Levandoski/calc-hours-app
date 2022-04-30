import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ToastProvider } from 'react-native-fast-toast';
import BottomRouter from './src/router';

export default function App() {

  return (
    <ToastProvider placement='top' style={{backgroundColor: 'blue'}}>
      <NavigationContainer>
        <BottomRouter />
      </NavigationContainer>
    </ToastProvider>
  );
}

