/* eslint-disable global-require */
import React from 'react';

import {
  ProfileButton,
  ProfileTextBox,
  ProfileText,
  ProfileTextImage,
} from './style';

export default function MyPageProfileButton({ name }) {
  return (
    <ProfileButton>
      <ProfileTextBox>
        <ProfileText>{name}</ProfileText>
        <ProfileTextImage source={require('../../assets/RightArrow.png')} />
      </ProfileTextBox>
    </ProfileButton>
  );
}
