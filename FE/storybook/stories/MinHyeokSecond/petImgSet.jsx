import React from 'react';
import { Text } from 'react-native';
import {
  PetImgBox,
  PetImg,
  PetImgText,
} from './style';

export default function FolowButtonComponent({ petName }) {
  return (
    <PetImgBox>
      <PetImg source={require('./profile_cover.png')} resizeMode="cover">
        <PetImgText>{petName}</PetImgText>
      </PetImg>
    </PetImgBox>
  );
}
