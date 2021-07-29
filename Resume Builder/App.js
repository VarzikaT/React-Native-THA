import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import PersonalInfo from './components/personalInfo';
import EducationalInfo from './components/educationalInfo';
import ProjectInfo from './components/projectInfo';

import SkillsAndIntrest from './components/skillandinterest';
import Resume from './components/resume';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Personal Info'} component={PersonalInfo} />
            <Stack.Screen
              name={'Educational Info'}
              
              component={EducationalInfo}

            />
            <Stack.Screen name={'Project Info'} component={ProjectInfo} />
            <Stack.Screen
              name={'Skills/Intrest'}
              component={SkillsAndIntrest}
            />
            <Stack.Screen name={'Resume'} component={Resume} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});
