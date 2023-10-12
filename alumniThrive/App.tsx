import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoarding from './screen/onBoarding';
import {ThemeProvider, Button} from 'react-native-elements';
import {theme} from './theme/theme';
import StartScreen from './screen/auth/StartScreen';
import Login from './screen/auth/Login';
import CreateAccount from './screen/auth/CreateAccount';
import AuthNavigation from './screen/auth/AuthNavigation';
import Navigation from './screen/dashboard/Navigation';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
