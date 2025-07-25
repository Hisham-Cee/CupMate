import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false, 
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Homes') iconName = 'home-sharp';
      else if (route.name === 'Favorites') iconName = 'heart-half-outline';
      else if (route.name === 'Cart') iconName = 'lock-closed';
      else if (route.name === 'Notifications') iconName = 'notifications-sharp';

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#c5845bef',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: '#fcfaf9ef',
      paddingTop: 22,
      height: 90,
      borderRadius: 25,
      borderWidth: 1,
      borderColor:'#fcfaf9ef'
    },
  })}
>

      <Tab.Screen name="Homes" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

