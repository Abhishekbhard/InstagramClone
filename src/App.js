/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import MyTabs from './components/MyTabs';

const App: () => Node = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
