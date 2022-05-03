import { useState } from 'react';
import CalculatorView from '../views/calculator';
import SettingsView from '../views/settings';
import { BottomNavigation, withTheme } from 'react-native-paper';
import { Calculator, Faders, Airplane } from 'phosphor-react';


const BottomRouter = ({ theme }: any) => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'Calculator', title: 'Calculator', color: '#3F51B5' ,icon: () => (<Calculator color={theme.colors.primary} size={80}/>) },
    { key: 'Settings', title: 'Settings', color: '#009688', icon: () => (<Faders color={theme.colors.primary} size={80}/>) },
    { key: 'Settings', title: 'Test', color: '#11a35a', icon: () => (<Airplane color={theme.colors.primary} size={80}/>) },
    { key: 'Settings', title: 'Testing', color: '#009688', icon: () => (<Calculator color={theme.colors.primary} size={80}/>) },
  ];


  const renderScene = ({ route, jumpTo } : any) => {
    switch (route.key) {
      case 'Calculator':
        return <CalculatorView />;
      case 'Settings':
        return <SettingsView />;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      sceneAnimationEnabled={true}
      renderScene={renderScene}
    />
  );
}

export default withTheme(BottomRouter);