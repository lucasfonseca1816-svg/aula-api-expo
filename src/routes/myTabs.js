import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../telas/home';
import ItemsScreen from '../telas/items';
import PerfilScreen from '../telas/perfil';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="items" component={ItemsScreen} />
      <Tab.Screen name="perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}