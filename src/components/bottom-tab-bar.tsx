import React from 'react';
import { View, Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import bottomTabBar from '../styles/bottom-tab-bar';
import { AiFillCalculator } from 'react-icons/ai';
import { IoSettings } from 'react-icons/io5';


const BottomTabBarComponent = ({ navigation }: BottomTabBarProps) => {
  return (
    <View style={bottomTabBar.container}>
      <Pressable onPress={() => navigation.navigate('Calculator')}>
        <AiFillCalculator size={60} color='#fff'/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')} >
        <IoSettings size={60} color='#fff'/>
      </Pressable>
    </View>
  );
}

export default BottomTabBarComponent;