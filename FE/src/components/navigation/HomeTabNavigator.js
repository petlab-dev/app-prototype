import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import ColorPickerScreen from '../screens/ColorPickerScreen';
import MyPageScreen from '../screens/MyPageScreen';

import { constantsValue } from '../constants';

const { COLOR_PRIMARY, COLOR_LIGHT } = constantsValue;

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, size, color }) {
  return <Icon name={name} size={size} color={color} />;
}

const ICON_SIZE = 21;

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLOR_PRIMARY,
        // inactiveTintColor: constant.inactive,
        style: {
          height: 65,
          // backgroundColor: constant.background,
        },
        tabStyle: {
          padding: 10,
        },
        labelStyle: {
          fontSize: 11,
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabBarIcon name="home" size={ICON_SIZE} color={COLOR_PRIMARY} />
            ) : (
              <TabBarIcon name="home" size={ICON_SIZE} color={COLOR_LIGHT} />
            ),
        }}
      />
      <Tab.Screen
        name="ColorPickerScreen"
        component={ColorPickerScreen}
        options={{
          tabBarLabel: 'CHECK',
          tabBarIcon: ({ focused }) =>
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
            ),
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'SETTINGS',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabBarIcon name="cog" size={ICON_SIZE} color={COLOR_PRIMARY} />
            ) : (
              <TabBarIcon name="cog" size={ICON_SIZE} color={COLOR_LIGHT} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
