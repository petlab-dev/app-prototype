import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../../contexts';

import SharedStatusBar from '../shared/SharedStatusBar';
import MainStackNavigator from './MainStackNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthCheckScreen from '../screens/AuthCheckScreen';
import TermsScreen from '../screens/TermsScreen';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  const [auth, setAuth] = useState(false);

  function toggleAuth() {
    setAuth(!auth);
  }

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      <NavigationContainer>
        <SharedStatusBar />
        <Stack.Navigator
          screenOptions={{
            animationEnabled: true,
            headerShown: false,
          }}
        >
          {auth ? (
            <Stack.Screen name="Main" component={MainStackNavigator} />
          ) : (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen
                name="AuthCheckScreen"
                component={AuthCheckScreen}
              />
              <Stack.Screen name="TermsScreen" component={TermsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
