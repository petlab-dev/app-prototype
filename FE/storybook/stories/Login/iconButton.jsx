import React from 'react';
import { Text } from 'react-native';
import { IconButtonStyle } from './emotionStyle';

export default function TopText({ plattform }) {
  return (
    <IconButtonStyle onPress={() => alert("클릭")}>
      <Text>{plattform}</Text>
    </IconButtonStyle>
  );
}
