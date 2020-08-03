/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';

import { AuthContext } from '../../contexts';

export default function Test({ navigation }) {
  const { toggleAuth } = useContext(AuthContext);

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="push" onPress={() => navigation.navigate('Main2')} />
      <Button title="Logout" onPress={() => toggleAuth()} />
    </View>
  );
}
