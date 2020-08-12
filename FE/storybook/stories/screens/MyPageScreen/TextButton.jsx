/* eslint-disable global-require */
import React from 'react';

import {
  Textbutton,
  TextbuttonText,
  TextbuttonCount,
  TextbuttonImg,
  TextbuttonContainer,
} from './style';

export default function TextButton({ data }) {
  return (
    data.map((content) => (
      <Textbutton onPress={() => alert('클릭')}>
        <TextbuttonContainer>
          <TextbuttonText>{ content.textType }</TextbuttonText>
          <TextbuttonCount>{content.count}</TextbuttonCount>
          <TextbuttonImg source={require('../../assets/RightArrow.png')} />
        </TextbuttonContainer>
      </Textbutton>
    ))
  );
}
