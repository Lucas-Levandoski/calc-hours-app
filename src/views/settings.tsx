import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../redux/reducers/theme';
import { setFreeUser, setPaidUser } from '../redux/reducers/user-type';


export const SettingsView = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(setDarkTheme())}>
        set Dark theme
      </Button>
      <Button onPress={() => dispatch(setLightTheme())}>
        set Light theme
      </Button>

      <Button onPress={() => dispatch(setFreeUser())}>
        set Free User
      </Button>
      <Button onPress={() => dispatch(setPaidUser())}>
        set Paid User
      </Button>
    </View>
  );
};