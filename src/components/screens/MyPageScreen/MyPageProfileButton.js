/* eslint-disable global-require */
import React from 'react';

import {
  ProfileButton,
  ProfileTextBox,
  ProfileText,
} from './style';

export default function MyPageProfileButton({ name }) {
  return (
    // <ProfileButton onPress={() => navigation.push('Test')}>
    <ProfileButton onPress={() => {}}>
      <ProfileTextBox>
        <ProfileText>{name}</ProfileText>
      </ProfileTextBox>
    </ProfileButton>
  );
}
