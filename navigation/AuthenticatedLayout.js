import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../screen/Feed';
import Comments from '../screen/Comments';
import Explore from '../screen/Explore';
import Create from '../screen/Create';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
const AuthenticatedLayout = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticatedLayout

const styles = StyleSheet.create({})