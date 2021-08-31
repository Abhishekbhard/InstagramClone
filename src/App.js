/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
