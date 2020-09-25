import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import ColorPickerScreen from '../screens/ColorPickerScreen';
import MyPageScreen from '../screens/MyPageScreen';

import { COLOR_PRIMARY, COLOR_LIGHT } from '../constants';

const Tab = createBottomTabNavigator();

const ICON_SIZE = 21;

function TabBarIcon({ name, size, color }) {
  return <Icon name={name} size={size} color={color} />;
}

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLOR_PRIMARY,
        style: {
          height: Platform.OS === 'web' ? 65 : 85,
          userSelect: 'none',
        },
        tabStyle: {
          padding: 5,
        },
        labelStyle: {
          fontSize: 11,
          padding: 5,
        },
        safeAreaInsets: {
          bottom: 20,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <TabBarIcon name="home" size={ICON_SIZE} color={COLOR_PRIMARY} />
            ) : (
              <TabBarIcon name="home" size={ICON_SIZE} color={COLOR_LIGHT} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="ColorPickerScreen"
        component={ColorPickerScreen}
        options={{
          tabBarLabel: 'CHECK',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <TabBarIcon
                name="stethoscope"
                size={ICON_SIZE}
                color={COLOR_PRIMARY}
              />
            ) : (
              <TabBarIcon
                name="stethoscope"
                size={ICON_SIZE}
                color={COLOR_LIGHT}
              />
            )
          ),
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'My Page',
          tabBarIcon: ({ focused }) => (
            focused ? (
              <TabBarIcon name="user" size={ICON_SIZE} color={COLOR_PRIMARY} />
            ) : (
              <TabBarIcon name="user" size={ICON_SIZE} color={COLOR_LIGHT} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
}
