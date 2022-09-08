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
        <Button style={historyPad.clock}>
          <Clock size={32}/>
        </Button>
        <Button style={historyPad.backspace}>
          <Backspace size={32}/>
        </Button>
        <View style={historyPad.historyItemsContainer}>
          <Button style={historyPad.historyItem}>
            <Text>337d12h</Text>
          </Button>
          <Button style={historyPad.historyItem}>
            <Text>337d12h</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);