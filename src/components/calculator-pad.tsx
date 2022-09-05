import React from 'react';
import { View } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import calculatorPad from '../styles/calculator-pad';
import { PadButtonType } from '../types/pad-buttons';

type props = {
  onClick: (value: string) => void;
  buttons: PadButtonType[][];
  theme: Theme;
};

const CalculatorPadComponent = ({ onClick, buttons }: props) => {
  return (
    <View style={calculatorPad.content}>
      {
        buttons.map((row, i) => {
          return (
            <View key={i} style={calculatorPad.row}>
              {
                row.map((button, j) => {
                  return (
                    <Button
                      mode="contained"
                      disabled={!button.available}
                      key={j}
                      style={calculatorPad.button}
                      onPress={() => onClick(button.value)}
                    >
                      {button.value} {button.available ? '' : '*'}
                    </Button>
                  );
                })
              }
            </View>
          );
        })
      }
    </View>
  );
};

export default withTheme(CalculatorPadComponent);