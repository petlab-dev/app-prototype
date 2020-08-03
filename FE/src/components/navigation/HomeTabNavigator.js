import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, size, color }) {
  return <Icon name={name} size={size} color={color} style={{ marginBottom: -3 }} />;
}

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#7FC0C4',
        style: {
          backgroundColor: '#00818A',
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="home" size={20} color="#ffffff" />
          ) : (
            <TabBarIcon name="home" size={20} color="#7FC0C4" />
          )),
        }}
      />
      <Tab.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          tabBarLabel: 'Test',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="adjust" size={20} color="#ffffff" />
          ) : (
            <TabBarIcon name="adjust" size={20} color="#7FC0C4" />
          )),
        }}
      />
    </Tab.Navigator>
  );
}
