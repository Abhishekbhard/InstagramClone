/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';
import Amplify, {Auth} from 'aws-amplify';

// >>New - Configuring Auth Module

AppRegistry.registerComponent(appName, () => App);
