/* eslint-disable global-require */
import React from 'react';

import {
  Textbutton,
  TextbuttonText,
  TextbuttonCount,
  TextbuttonImg,
  TextbuttonContainer,
} from './style';

export default function TextButton({ textType, count }) {
  return (
    <Textbutton onPress={() => alert('클릭')}>
      <TextbuttonContainer>
        <TextbuttonText>{ textType }</TextbuttonText>
        <TextbuttonCount>{count}</TextbuttonCount>
        <TextbuttonImg source={require('../../assets/RightArrow.png')} />
      </TextbuttonContainer>
    </Textbutton>
  );
}
