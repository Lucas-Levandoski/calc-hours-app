import React from 'react';
import { View } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import returnTypePad from '../styles/return-type-pad';
import { ReturnTypes } from '../utils/enums';

type props = {
  onClick: (value: string) => void;
  theme: Theme;
};

const ReturnTypePadComponent = ({ onClick }: props) => {
  return (
    <View style={returnTypePad.row}>
      <Button
        mode="contained"
        style={returnTypePad.button}
        onPress={() => onClick(ReturnTypes.days)}
        uppercase={false}
      >
            in days
      </Button>
      <Button
        mode="contained"
        style={returnTypePad.button}
        onPress={() => onClick(ReturnTypes.hours)}
        uppercase={false}
      >
            in hours
      </Button>
      <Button
        mode="contained"
        style={returnTypePad.button}
        onPress={() => onClick(ReturnTypes.minutes)}
        uppercase={false}
      >
            in mins
      </Button>
      <Button
        mode="contained"
        style={returnTypePad.button}
        onPress={() => onClick(ReturnTypes.seconds)}
        uppercase={false}
      >
            in secs
      </Button>
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);