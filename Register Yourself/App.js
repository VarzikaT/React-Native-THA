import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './components/Profile'
import Registration from './components/Registration'
import Home from './components/home'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center',}}>
       
        <Stack.Screen name="Home" component = {Home} />
       <Stack.Screen name="Registration" component = {Registration} />
        <Stack.Screen name="Profile" component = {Profile} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
