import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import historyPad from '../styles/history-pad';

type props = {
  onClick: (value: string) => void;
  theme: Theme;
};

const ReturnTypePadComponent = ({ onClick }: props) => {
  return (
    <View>
      <View style={historyPad.row}>

      </View>
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);