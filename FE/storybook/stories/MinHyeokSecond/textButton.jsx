import React from 'react';
import { Text } from 'react-native';
import {
  Textbutton,
  TextbuttonText,
  TextbuttonCount,
  TextbuttonImg,
  TextbuttonContainer,
} from './style';

export default function TopText({ textType, count }) {
  return (
    <Textbutton onPress={() => alert('클릭')}>
      <TextbuttonContainer>
        <TextbuttonText>{ textType }</TextbuttonText>
        <TextbuttonCount>{count}</TextbuttonCount>
        <TextbuttonImg source={require('./rightarrow_87483.png')} />
      </TextbuttonContainer>
    </Textbutton>
  );
}
