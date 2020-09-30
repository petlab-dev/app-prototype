/* eslint-disable camelcase */
import React from 'react';

import { ActivityIndicator, Text } from 'react-native';

import { Provider } from 'react-redux';

import { useFonts, Nunito_900Black } from '@expo-google-fonts/nunito';
import { NanumGothicCoding_700Bold } from '@expo-google-fonts/nanum-gothic-coding';

import store from './store';

import RootStackNavigator from './components/navigation/RootStackNavigator';

import { CenterView } from './components/constants';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Nunito_900Black,
    NanumGothicCoding_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <CenterView>
        <ActivityIndicator color="black" size="large" />
        <Text>aa</Text>
      </CenterView>
    );
  }

  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
}
