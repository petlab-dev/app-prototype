import React from 'react';

import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

function Something() {
  return (
    <View>
      <Text>abc</Text>
    </View>
  );
}

function Main2() {
  return (
    <View>
      <Text>뒤로</Text>
    </View>
  );
}

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
        name="Main"
        component={MainScreen}
        options={{
          headerTitle: 'Main',
          tabBarLabel: 'Main',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="rocket" size={20} color="#ffffff" />
          ) : (
            <TabBarIcon name="rocket" size={20} color="#7FC0C4" />
          )),
        }}
      />
      <Tab.Screen
        name="Something"
        component={Something}
        options={{
          headerTitle: 'else',
          tabBarLabel: 'Something',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="space-shuttle" size={20} color="#ffffff" />
          ) : (
            <TabBarIcon name="space-shuttle" size={20} color="#7FC0C4" />
          )),
        }}
      />
    </Tab.Navigator>
  );
}
