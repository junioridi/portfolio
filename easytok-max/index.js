
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { registerRootComponent } from 'expo';

import 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);


/*
import { registerRootComponent } from 'expo';

import App from './App';
import 'react-native-gesture-handler';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
*/






/*
import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';

class App extends React.Component {
  render() {
    return <View />;
  }
}

registerRootComponent(App);
*/
