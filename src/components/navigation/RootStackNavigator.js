import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import { get } from '../../utils';

import MainStackNavigator from './MainStackNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthCheckScreen from '../screens/AuthCheckScreen';
import TermsScreen from '../screens/TermsScreen';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  const auth = useSelector(get('auth'));

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}
      >
        {auth ? (
          <Stack.Screen name="Main" component={MainStackNavigator} />
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="AuthCheckScreen" component={AuthCheckScreen} />
            <Stack.Screen name="TermsScreen" component={TermsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
