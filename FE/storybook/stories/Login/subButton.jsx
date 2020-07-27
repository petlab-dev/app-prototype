import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './style';

export default function TopText({ plattform }) {
  return (
    <TouchableOpacity style={style.iconButton} onPress={() => alert("클릭")}>
      <Text>{plattform}</Text>
    </TouchableOpacity>
  );
}
