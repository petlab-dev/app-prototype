/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { View, Button, Platform } from 'react-native';

import { WebView } from 'react-native-webview';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Fireworks } from 'fireworks/lib/react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleAuth } from '../../slice';

import { get } from '../../utils';

import HomeTabNavigator from './HomeTabNavigator';

import { HeaderSide, HeaderTitle, HeaderTitleText } from './style';

import { COLOR_PRIMARY, COLOR_GREEN, COLOR_SECONDARY } from '../constants';

const Stack = createStackNavigator();

function Test({ navigation }) {
  return (
    <View>
      <Button title="pop" onPress={() => navigation.pop()} />
    </View>
  );
}

export default function MainStackNavigator({ navigation }) {
  const dispatch = useDispatch();
  const location = useSelector(get('location'));

  const [fireworks, setFireworks] = useState(false);

  const fxProps = {
    count: 1,
    interval: 500,
    particleTimeout: 500,
    colors: [COLOR_PRIMARY, COLOR_GREEN, COLOR_SECONDARY],
    x: window.innerWidth / 2 - 70,
    y: 5,
  };

  function fireFireworks(duration = 300) {
    setFireworks(true);
    setTimeout(() => {
      setFireworks(false);
    }, duration);
  }

  useEffect(() => {
    fireFireworks(500);
  }, []);

  const Web = () => (
    <WebView
      source={{
        uri: `https://www.google.com/maps/search/%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90/@${location.y},${location.x},13z`,
      }}
      style={{ width: '100%', height: '100%' }}
    />
  );
  const headerLeft = () => (
    <HeaderSide onPress={() => navigation.pop()}>
      <Icon name="arrow-left" size={20} color={COLOR_PRIMARY} />
    </HeaderSide>
  );

  const headerLeftMock = () => (
    <HeaderSide disabled={true}>
      <Icon name="arrow-left" size={20} color="transparent" />
    </HeaderSide>
  );

  const headerTitle = () => (
    <HeaderTitle onPress={() => fireFireworks()}>
      {Platform.OS === 'web' && fireworks ? <Fireworks {...fxProps} /> : <></>}
      <HeaderTitleText>Catmate</HeaderTitleText>
    </HeaderTitle>
  );

  const headerRight = () => (
    <HeaderSide onPress={() => dispatch(toggleAuth())}>
      <Icon name="id-card" size={20} color={COLOR_PRIMARY} />
    </HeaderSide>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Catmate"
        component={HomeTabNavigator}
        options={{
          headerLeft: headerLeftMock,
          headerTitle,
          headerRight,
        }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerTitle,
          headerLeft,
          headerRight,
        }}
      />
      <Stack.Screen
        name="Web"
        component={Web}
        options={{
          headerTitle,
          headerLeft,
          headerRight,
        }}
      />
    </Stack.Navigator>
  );
}
