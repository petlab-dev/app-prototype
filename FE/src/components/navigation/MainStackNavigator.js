import React from 'react';
import { View, Text, Button } from 'react-native';

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

function Something() {
  return (
    <View>
      <Text>abc</Text>
    </View>
  );
}

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tab}
      />
      <Stack.Screen name="Main2" component={Main2} />
      <Stack.Screen name="Something" component={Something} />
    </Stack.Navigator>
  );
}
