import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGlobalState} from '../GlobalProvider';
import AuthenticatedLayout from './AuthenticatedLayout';
import Layout from './Layout';

const AppNavigator = () => {
  const {globalState} = useGlobalState();
  return (
    <View style={{flex: 1}}>
      {globalState.userData ? <AuthenticatedLayout /> : <Layout />}
      
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
