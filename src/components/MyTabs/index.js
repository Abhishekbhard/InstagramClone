import React from 'react';

import Discovery from '../../screens/Discovery';
import CreatePost from '../../screens/CreatePost';
import Notifications from '../../screens/Notifications';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../../screens/Profile';

import HomeStackScreen from './Home.stack';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import BottomHomeNavigator from './BottomHomeNavigator';
import StoryScreen from '../../screens/StoryScreen';

const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyTabs;
