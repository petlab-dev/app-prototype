import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../../contexts';

import SharedStatusBar from '../shared/StatusBar';
import MainStackNavigator from './MainStackNavigator';
import PreSignUp from '../screens/PreSignUp';

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
        <Stack.Navigator>
          {auth ? (
            <Stack.Screen
              name="Main"
              component={MainStackNavigator}
              options={{
                headerShown: false,
                headerTitle: '',
                headerBackTitle: '',
              }}
            />
          ) : (
            <Stack.Screen
              name="PreSignUp"
              component={PreSignUp}
              options={{
                headerShown: true,
                headerTitle: '',
                headerBackTitle: '',
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
}
