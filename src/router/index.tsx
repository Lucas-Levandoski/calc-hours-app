import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBarComponent from '../components/bottom-tab-bar';
import CalculatorView from '../views/calculator';
import SettingsView from '../views/settings';


const BottomTabs = createBottomTabNavigator();

const BottomRouter = () => {
  return (
    <BottomTabs.Navigator initialRouteName='Calculator' tabBar={BottomTabBarComponent} screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name='Calculator' component={CalculatorView} />
      <BottomTabs.Screen name='Settings' component={SettingsView} />
    </BottomTabs.Navigator>
  );
}

export default BottomRouter