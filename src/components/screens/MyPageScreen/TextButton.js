/* eslint-disable global-require */
import React from 'react';

import {
  Textbutton,
  TextbuttonText,
  TextbuttonCount,
  TextbuttonImage,
  TextbuttonContainer,
} from './style';

export default function TextButton({ data }) {
  return data.map((content) => (
    <Textbutton key={content.key}>
      <TextbuttonContainer>
        <TextbuttonText>{content.textType}</TextbuttonText>
        <TextbuttonCount>{content.count}</TextbuttonCount>
        <TextbuttonImage source={require('../../assets/RightArrow.png')} />
      </TextbuttonContainer>
    </Textbutton>
  ));
}
