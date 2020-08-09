import React from 'react';
import { Text } from 'react-native';
import {
  ProfileButton,
  ProfileTextBox,
  ProfileText,
  ProfileTextImage,
} from './style';

export default function FolowButtonComponent({ name }) {
  return (
    <ProfileButton>
      <ProfileTextBox>
        <ProfileText>{name}</ProfileText>
        <ProfileTextImage source={require('./rightarrow_87483.png')} />
      </ProfileTextBox>
    </ProfileButton>
  );
}
