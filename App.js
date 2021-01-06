import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Check from './components/checkbox';
import TicTac from './components/TicTac/Game';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
       initialRouteName='Signup'
       screenOptions={{
         headerTitleAlign: 'center',
         headerStyle: {
           backgroundColor: '#db6400',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       }}>
         <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: 'Signup'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              {title: 'Login'},
              {headerLeft: null}
            }
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={
              {title: 'Dashboard'},
              {headerLeft: null}
            }
            />
            <Stack.Screen
              name="Check"
              component={Check}
              options={
                {title: 'CheckBox'},
                {headerLeft: null}
              }
            />
             <Stack.Screen
              name="Game"
              component={TicTac}
              options={
                {title: 'Start Game'},
                {headerLeft: null}
              }
            />

       </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
