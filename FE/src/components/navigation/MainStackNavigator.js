import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

function Main2({ navigation }) {
  return (
    <View>
      <Button title="pop" onPress={() => navigation.pop()} />
    </View>
  );
}

export default function MainStackNavigator({ navigation }) {
  const headerTitle = () => (
    <TouchableOpacity
      style={{ justifyContent: 'center', alignItems: 'center' }}
      onPress={() => navigation.navigate('Petsome')}
    >
      <Text
        style={{
          color: '#f44336',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Petsome
      </Text>
    </TouchableOpacity>
  );

  const headerLeft = () => (
    <TouchableOpacity
      style={{ justifyContent: 'center', paddingLeft: 20 }}
      onPress={() => navigation.pop()}
    >
      <Icon name="arrow-left" size={20} color="#f44336" />
    </TouchableOpacity>
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Petsome"
        component={HomeTabNavigator}
        options={{
          headerTitle,
        }}
      />
      <Stack.Screen
        name="Main2"
        component={Main2}
        options={{
          headerTitle,
          headerLeft,
        }}
      />
    </Stack.Navigator>
  );
}
