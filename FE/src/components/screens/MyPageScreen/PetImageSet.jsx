/* eslint-disable global-require */
import React from 'react';

import {
  PetImgBox,
  PetImg,
  PetImgText,
} from './style';

export default function PetImageSet({ petName }) {
  return (
    <PetImgBox>
      <PetImg source={require('../../assets/ProfileCover.png')} resizeMode="cover">
        <PetImgText>{petName}</PetImgText>
      </PetImg>
    </PetImgBox>
  );
}
