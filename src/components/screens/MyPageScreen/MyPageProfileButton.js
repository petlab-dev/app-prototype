/* eslint-disable global-require */
import React from 'react';

import {
  ProfileButton,
  ProfileTextBox,
  ProfileText,
} from './style';

export default function MyPageProfileButton({ name, navigation }) {
  return (
    <ProfileButton onPress={() => navigation.push('Test')}>
      <ProfileTextBox>
        <ProfileText>{name}</ProfileText>
      </ProfileTextBox>
    </ProfileButton>
  );
}
