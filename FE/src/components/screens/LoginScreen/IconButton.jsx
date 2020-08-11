import React from 'react';
import { Text } from 'react-native';
import { IconButtonStyle } from './style';

export default function TopText({ plattform, onPressAsync }) {
  return (
    <IconButtonStyle onPress={() => onPressAsync()}>
      <Text>{plattform}</Text>
    </IconButtonStyle>
  );
}
