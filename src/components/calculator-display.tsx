import React from 'react';
import { TextInput, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import calculatorDisplay from '../styles/calculator-display';

type props = {
  theme: Theme;
};

const ReturnTypePadComponent = (props: props) => {
  return (
    <View style={calculatorDisplay.display}>
      testing stuff
      <TextInput
        multiline={true}
        value='test'
      />
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);