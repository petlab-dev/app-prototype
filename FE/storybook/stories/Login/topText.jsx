import React from 'react';
import { Text } from 'react-native';
import style from './style';

export default function TopText() {
  return (
    <Text style={style.headerText}>
      안녕하세요 고객님,
      {'\n'}
      내 손안에 수의사 펫닥입니다.
    </Text>
  );
}
