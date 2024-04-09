import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGlobalState} from '../GlobalProvider';
import AuthenticatedLayout from './AuthenticatedLayout';
import Layout from './Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppNavigator = () => {
  const {globalState} = useGlobalState();
  const [isUserLoged, setIsUserLoged] = useState(null);
  const getUserDetails = async () => {
    try {
      let res = await AsyncStorage.getItem('userData');
      setIsUserLoged(res);
    } catch (error) {}
  };
  useEffect(() => {
    getUserDetails();
  });

  return (
    <View style={{flex: 1}}>
      {isUserLoged ? <AuthenticatedLayout /> : <Layout />}
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
