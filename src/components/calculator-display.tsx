import React from 'react';
import { TextInput, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

type props = {
  theme: Theme;
};

const ReturnTypePadComponent = (props: props) => {
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