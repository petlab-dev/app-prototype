/* eslint-disable global-require */
import React from 'react';

import {
  PetImgBox,
  PetImg,
  PetImgText,
} from './style';

export default function PetImageSet({ data }) {
  return (
    data.map((petStatus) => (
      <PetImgBox key={petStatus.key}>
        <PetImg source={require('../../assets/ProfileCover.png')} resizeMode="cover">
          <PetImgText>{petStatus.petName}</PetImgText>
        </PetImg>
      </PetImgBox>
    ))
  );
}
