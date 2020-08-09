import React from 'react';
import { View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

function Main2({ navigation }) {
  return (
    <View>
      <Button title="pop" onPress={() => navigation.pop()} />
    </View>
  );
}

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabNavigator"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main2"
        component={Main2}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
