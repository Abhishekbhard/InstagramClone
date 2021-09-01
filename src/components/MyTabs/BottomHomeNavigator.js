import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Discovery from '../../screens/Discovery';
import CreatePost from '../../screens/CreatePost';
import Notifications from '../../screens/Notifications';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../../screens/Profile';

import HomeStackScreen from './Home.stack';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeStack') {
            return <FoundationIcon name="home" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === 'Post') {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === 'Notification') {
            return <AntDesign name="hearto" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },

        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="Post" component={CreatePost} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
