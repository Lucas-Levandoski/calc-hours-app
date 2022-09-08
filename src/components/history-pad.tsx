import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import historyPad from '../styles/history-pad';
import { Clock, Backspace } from 'phosphor-react';

type props = {
  onClick: (value: string) => void;
  theme: Theme;
};

const ReturnTypePadComponent = ({ onClick }: props) => {
  return (
    <View>
      <View style={historyPad.row}>
        <View style={historyPad.clock}>
          <Clock size={32}/>
        </View>
        <View style={historyPad.backspace}>
          <Backspace size={32}/>
        </View>
        <View style={historyPad.historyItemsContainer}>
          <View style={historyPad.historyItem}>
            <Text>337d12h</Text>
          </View>
          <View style={historyPad.historyItem}>
            <Text>337d12h</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);