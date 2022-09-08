import React from 'react';
import { Gear, Moon } from 'phosphor-react';
import { withTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { View } from 'react-native';
import configBar from '../styles/config-bar';

type props = {
  theme: Theme;
};

const ReturnTypePadComponent = (props: props) => {
  return (
    <View style={configBar.row}>
      <View style={configBar.actionIcon}>
        <Gear size={32} />
      </View>
      <View style={configBar.actionIcon}>
        <Moon size={32} weight='fill' />
      </View>
    </View>
  );
};

export default withTheme(ReturnTypePadComponent);