/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Text } from 'react-native';
import { MainContainer } from '../../styles';

export default function MainScreen({ navigation }) {
  return (
    <MainContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="push" onPress={() => navigation.navigate('Main2')} />
    </MainContainer>
  );
}

