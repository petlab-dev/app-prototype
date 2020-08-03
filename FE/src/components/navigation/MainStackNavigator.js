import React from 'react';
import { View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Tab from './HomeTabNavigator';

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
        name="HomeTab"
        component={Tab}
      />
      <Stack.Screen name="Main2" component={Main2} />
    </Stack.Navigator>
  );
}

