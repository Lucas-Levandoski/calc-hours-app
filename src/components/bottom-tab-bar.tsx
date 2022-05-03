import React, { useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import bottomTabBar from '../styles/bottom-tab-bar';
import { Calculator, Faders } from 'phosphor-react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';

const BottomTabBarComponent = ({ navigation }: BottomTabBarProps) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Calculator', title: 'Music', icon: 'calculator' },
    { key: 'Settings', title: 'Albums', icon: 'album' },
  ]);

  const renderScene = ({ route, jumpTo } : any) => {
    navigation.navigate(route.key);
    return (<Text>test</Text>);
  };

  useEffect(() => {
    navigation.navigate(routes[index].key);
  }, [index]);


  return (
    <View style={bottomTabBar.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

export default BottomTabBarComponent;


// const BottomTabBarComponent = ({ navigation }: BottomTabBarProps) => {
//   // const theme = useTheme();

//   return (
//     <View style={bottomTabBar.container}>
//       <Pressable onPress={() => navigation.navigate('Calculator')}>
//         <Calculator size={60} />
//       </Pressable>
//       <Pressable onPress={() => navigation.navigate('Settings')} >
//         <Faders size={60} />
//       </Pressable>
//     </View>
//   );
// }

// export default BottomTabBarComponent;