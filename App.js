import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './screen/Login';
import Otp from './screen/Otp';
import SignUp from './screen/SignUp';
import Feed from './screen/Feed';
import Footer from './componentss/Footer';
import Explore from './screen/Explore';
import Comments from './screen/Comments';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Layout from './navigation/Layout';
import AuthenticatedLayout from './navigation/AuthenticatedLayout';
import {GlobalStateProvider} from './GlobalProvider';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <GlobalStateProvider>
      <AppNavigator />
      
    </GlobalStateProvider>

    // <AuthenticatedLayout/>
  );
};

export default App;

const styles = StyleSheet.create({});
