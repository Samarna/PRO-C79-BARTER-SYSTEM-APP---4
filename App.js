import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignupLoginScreen from './screens/SignupLoginScreen';
console.disableYellowBox=true;

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreenScreen : {screen:SignupLoginScreen},
  drawer : {screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator);