/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,StyleSheet,Text,View,StatusBar} from 'react-native';
/*import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';*/

import Header from './src/components/Header';
import {colors} from './src/screens/global/styles';
import Navigation from './src/navigation/index';
import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle = "light-content"
        backgroundcolor = {colors.statusbar}
      />
      <Navigation/>
            
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  root:{
    flex : 1,
    backgroundColor:'#F9FBFC',
    
  },
});

export default App;
