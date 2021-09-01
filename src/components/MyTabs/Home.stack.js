import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/HomeScreen';
import logo from '../../assets/images/logo.png';
import {Image} from 'react-native';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Instagram',
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image resizeMode="contain" source={logo} style={{width: 135}} />
        ),
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => <Feather name="camera" size={22} color="#000" />,
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={22} color="#000" />
        ),
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default HomeStackScreen;
