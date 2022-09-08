import React from 'react';
import { TextInput, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

type props = {
  onClick: (value: string) => void;
  theme: Theme;
};

const ReturnTypePadComponent = ({ onClick }: props) => {
  return (
    <View>
      <TextInput
        multiline={true}
        value='test'
      />
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);