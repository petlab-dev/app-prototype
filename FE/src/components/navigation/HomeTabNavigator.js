import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import ColorPickerScreen from '../screens/ColorPickerScreen';
import MyPageScreen from '../screens/MyPageScreen';

import { constantsValue } from '../constants';

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, size, color }) {
  return <Icon name={name} size={size} color={color} style={{ marginBottom: -3 }} />;
}

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: constantsValue.COLOR_PRIMARY,
        // inactiveTintColor: constant.inactive,
        style: {
          // backgroundColor: constant.background,
        },
        labelStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="home" size={20} color={constantsValue.COLOR_PRIMARY} />
          ) : (
            <TabBarIcon name="home" size={20} />
          )),
        }}
      />
      <Tab.Screen
        name="ColorPickerScreen"
        component={ColorPickerScreen}
        options={{
          // headerTitle: '피커',
          tabBarLabel: '피커',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="adjust" size={20} color={constantsValue.COLOR_PRIMARY} />
          ) : (
            <TabBarIcon name="adjust" size={20} />
          )),
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({ focused }) => (focused ? (
            <TabBarIcon name="cog" size={20} color={constantsValue.COLOR_PRIMARY} />
          ) : (
            <TabBarIcon name="cog" size={20} />
          )),
        }}
      />
    </Tab.Navigator>
  );
}
