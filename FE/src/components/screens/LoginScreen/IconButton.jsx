import React from 'react';
import { Text } from 'react-native';
import { IconButtonStyle } from './style';

export default function TopText({ data }) {
  return (
    data.map((platformData) => (
      <IconButtonStyle onPress={() => alert(platformData.link)}>
        <Text>{platformData.platform}</Text>
      </IconButtonStyle>
    ))
  );
}
