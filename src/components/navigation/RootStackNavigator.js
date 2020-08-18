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
  const [location, setLocation] = useState({ x: 127.1054221, y: 37.3591614 });

  const [profile, setProfile] = useState({
    name: 'Yongjae Lee',
    picture:
      'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4',
  });

  function toggleAuth() {
    setAuth(!auth);
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        toggleAuth,
        location,
        setLocation,
        profile,
        setProfile,
      }}
    >
      <NavigationContainer>
        <SharedStatusBar />
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
